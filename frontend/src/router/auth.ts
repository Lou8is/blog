import axios from 'axios';
import jwtDecode, { type JwtPayload } from "jwt-decode";
import router from '.';

//source of most code here : https://chrismroberts.com/2019/01/03/authentication-and-protected-routes-in-vuejs/

export default abstract class Auth {

    private static readonly JWT_TOKEN_STORAGE_KEY = "jwt_token";

    public static login(username: string, password: string, redirect: string = 'home'): void {
        axios.post('/auth/login', {
            username: username,
            password: password
        })
        .then(function (response) {
            console.log(response);
            Auth.setAuthToken(response.data.access_token);
            router.push({ name: redirect })
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    public static logout(): void {
        this.clearAuthToken();
    }

    public static isLoggedIn(): boolean {
        let authToken = this.getAuthToken();
        return !!authToken && !this.isTokenExpired(authToken);
    }

    public static isUserAdmin(): boolean {
        return this.isLoggedIn();
    }
    
    private static setAuthToken(token: string): void {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        localStorage.setItem(this.JWT_TOKEN_STORAGE_KEY, token);
    }

    private static clearAuthToken(): void {
        axios.defaults.headers.common['Authorization'] = '';
        localStorage.removeItem(this.JWT_TOKEN_STORAGE_KEY);
    }

    private static getAuthToken(): string | null {
        return localStorage.getItem(this.JWT_TOKEN_STORAGE_KEY);
    }

    private static isTokenExpired(token: string): boolean {
        let expirationDate = this.getTokenExpirationDate(token);
        return expirationDate < new Date();
    }

    private static getTokenExpirationDate(encodedToken: string): Date {
        let token = jwtDecode<JwtPayload>(encodedToken)   
        let date = new Date(0);
        
        if (token.exp) {
            date.setUTCSeconds(token.exp);
        }       
      
        return date;
    }
}
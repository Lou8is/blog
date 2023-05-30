<template>
  <div v-if="editor">        
    <editor-menu :editor="editor"></editor-menu>
    <editor-content :editor="editor" />
  </div>
</template>

<script setup lang="ts">
  import { onMounted, onBeforeUnmount, ref, type Ref, watch } from 'vue';

  import StarterKit from '@tiptap/starter-kit'
  import { Editor, EditorContent } from '@tiptap/vue-3'

  import EditorMenu from './EditorMenu.vue'

  interface Props {
    modelValue: String,
  }

  const props = defineProps<Props>();

  const emit = defineEmits(['update:modelValue']);
  
  const modelValue = ref(props.modelValue)
  const editor: Ref<Editor | null> = ref(null)

  onMounted(() => {
    editor.value = new Editor({
        extensions: [
            StarterKit,
        ],
        content: props.modelValue,
        onUpdate: () => {
        // HTML
        emit('update:modelValue', editor.value?.getHTML())
        // JSON
        // this.$emit('update:modelValue', this.editor.getJSON())
        },
    })
  })
    
  onBeforeUnmount(() => {
    editor.value?.destroy()
  })

  watch(modelValue, (value) => {
    // HTML
    const isSame = editor.value?.getHTML() === value    
    // JSON
    // const isSame = JSON.stringify(this.editor?.getJSON()) === JSON.stringify(value)
    if (isSame) {
      return
    }
    editor.value?.commands.setContent(value, false)
  })

</script>

<style scoped>

</style>
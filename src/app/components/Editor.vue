<template>
  <editor-content :editor="editor" />
</template>

<script setup>
import { ref, watch, onMounted, onBeforeUnmount } from 'vue'
import { Editor, EditorContent } from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'


const modelValue=ref('')

const props = defineProps({
  modelValue: String
})
const emit = defineEmits(['update'])
emit('update', modelValue)

let editor=ref(null)

watch(modelValue, (newModelValue) => {
  const isSame = editor.getHTML() === newModelValue
  if (isSame) {
    return
  }
  editor.commands.setContent(newModelValue, false)
})

onMounted(() => {
  editor = new Editor({
      extensions: [
        StarterKit,
      ],
      content: modelValue,
      onUpdate: () => {
        // HTML
        const emit = defineEmits([''])
        emit('update:modelValue', editor.getHTML())
        // JSON
        // this.$emit('update:modelValue', this.editor.getJSON())
      },
    })
})

onBeforeUnmount(() => {
  editor.destroy()
})

</script>

<template>
  <div v-if="editor" class="bg-black text-white p-6 block min-w-full">
    <button class="mx-2 border" @click="editor.chain().focus().toggleBold().run()" :disabled="!editor.can().chain().focus().toggleBold().run()" :class="{ 'is-active': editor.isActive('bold') }">
      <v-icon>mdi-format-bold</v-icon>
    </button>
    <button class="mx-2 border" @click="editor.chain().focus().toggleItalic().run()" :disabled="!editor.can().chain().focus().toggleItalic().run()" :class="{ 'is-active': editor.isActive('italic') }">
      <v-icon>mdi-format-italic</v-icon>
    </button>
    <button class="mx-2 border" @click="editor.chain().focus().toggleUnderline().run()" :disabled="!editor.can().chain().focus().toggleUnderline().run()" :class="{ 'is-active': editor.isActive('underline') }">
      <v-icon>mdi-format-underline</v-icon>
    </button>
    <button class="mx-2 border" @click="editor.chain().focus().toggleStrike().run()" :disabled="!editor.can().chain().focus().toggleStrike().run()" :class="{ 'is-active': editor.isActive('strike') }">
      <v-icon>mdi-format-strikethrough</v-icon>
    </button>
    <button class="mx-2 border" @click="editor.chain().focus().toggleCode().run()" :disabled="!editor.can().chain().focus().toggleCode().run()" :class="{ 'is-active': editor.isActive('code') }">
      <v-icon>mdi-code-tags</v-icon>
    </button>
    <button class="mx-2 border" @click="editor.chain().focus().unsetAllMarks().run()">
      <v-icon>mdi-format-clear</v-icon>
    </button>
    <button class="mx-2 border" @click="editor.chain().focus().setParagraph().run()" :class="{ 'is-active': editor.isActive('paragraph') }">
      <v-icon>mdi-format-paragraph</v-icon>
    </button>
    <button class="mx-2 border" @click="editor.chain().focus().toggleHeading({ level: 1 }).run()" :class="{ 'is-active': editor.isActive('heading', { level: 1 }) }">
      <v-icon>mdi-format-header-1</v-icon>
    </button>
    <button class="mx-2 border" @click="editor.chain().focus().toggleHeading({ level: 2 }).run()" :class="{ 'is-active': editor.isActive('heading', { level: 2 }) }">
      <v-icon>mdi-format-header-2</v-icon>
    </button>
    <button class="mx-2 border" @click="editor.chain().focus().toggleHeading({ level: 3 }).run()" :class="{ 'is-active': editor.isActive('heading', { level: 3 }) }">
      <v-icon>mdi-format-header-3</v-icon>
    </button>
    <button class="mx-2 border" @click="editor.chain().focus().toggleHeading({ level: 4 }).run()" :class="{ 'is-active': editor.isActive('heading', { level: 4 }) }">
      <v-icon>mdi-format-header-4</v-icon>
    </button>
    <button class="mx-2 border" @click="editor.chain().focus().toggleHeading({ level: 5 }).run()" :class="{ 'is-active': editor.isActive('heading', { level: 5 }) }">
      <v-icon>mdi-format-header-5</v-icon>
    </button>
    <button class="mx-2 border" @click="editor.chain().focus().toggleHeading({ level: 6 }).run()" :class="{ 'is-active': editor.isActive('heading', { level: 6 }) }">
      <v-icon>mdi-format-header-6</v-icon>
    </button>
    <button class="mx-2 border" @click="editor.chain().focus().toggleBulletList().run()" :class="{ 'is-active': editor.isActive('bulletList') }">
      <v-icon>mdi-format-list-bulleted</v-icon>
    </button>
    <button class="mx-2 border" @click="editor.chain().focus().toggleOrderedList().run()" :class="{ 'is-active': editor.isActive('orderedList') }">
      <v-icon>mdi-format-list-numbered</v-icon>
    </button>
    <button class="mx-2 border" @click="editor.chain().focus().sinkListItem('listItem').run()" :disabled="!editor.can().sinkListItem('listItem')">
      <v-icon>mdi-format-indent-decrease</v-icon>
    </button>
    <button class="mx-2 border" @click="editor.chain().focus().liftListItem('listItem').run()" :disabled="!editor.can().liftListItem('listItem')">
      <v-icon>mdi-format-indent-increase</v-icon>
    </button>
    <button class="mx-2 border" @click="editor.chain().focus().toggleCodeBlock().run()" :class="{ 'is-active': editor.isActive('codeBlock') }">
      <v-icon>mdi-code-braces</v-icon>
    </button>
    <button class="mx-2 border" @click="editor.chain().focus().setHorizontalRule().run()">
      <v-icon>mdi-minus</v-icon>
    </button>
    <button class="mx-2 border" @click="editor.chain().focus().setHardBreak().run()">
      <v-icon>mdi-format-page-break</v-icon>
    </button>
    <button class="mx-2 border" @click="editor.chain().focus().undo().run()" :disabled="!editor.can().chain().focus().undo().run()">
      <v-icon>mdi-undo</v-icon>
    </button>
    <button class="mx-2 border" @click="editor.chain().focus().redo().run()" :disabled="!editor.can().chain().focus().redo().run()">
      <v-icon>mdi-redo</v-icon>
    </button>
    <button class="mx-2 border outline px-3 my-2 bg-green-400 text-black" @click="save()">
      Save
    </button>
  </div>
  <div class="border border-black p-4 mb-4 text-black no-tailwindcss-base">
    <editor-content :editor="editor"/>
  </div>
</template>

<script setup>
import { useEditor, EditorContent } from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'
import Underline from '@tiptap/extension-underline'
import BulletList from '@tiptap/extension-bullet-list'
import ListItem from '@tiptap/extension-list-item'

const emit = defineEmits(['save'])

const editor = ref(useEditor({
  content: 'Write your thoughts here.',
  extensions: [
    StarterKit,
    Underline,
    ListItem,
    BulletList
  ],
  parseOptions: {
    preserveWhitespace: 'full',
  },
  editorProps: {
    attributes: {
      class: 'prose dark:prose-invert prose-sm sm:prose-base lg:prose-lg xl:prose-2xl m-5 focus:outline-none',
    },
  },
}))

function save(){
  emit('save',editor.value.getHTML())
}
</script>

<style>
/* Basic editor styles */
.is-active{
  background: #fff;
  color:#000;
}

.ProseMirror{
  max-height:350px;
  
}

.ProseMirror {
  > * + * {
    margin-top: 0.75em;
  }

  ul,
  ol {
    padding: 0 1rem;
    color:#000;
  }

  li{
    color:#000;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    line-height: 1.1;
  }

  code {
    background-color: rgba(#616161, 0.1);
    color: #616161;
  }

  pre {
    background: #0D0D0D;
    color: #FFF;
    font-family: 'JetBrainsMono', monospace;
    padding: 0.75rem 1rem;
    border-radius: 0.5rem;

    code {
      color: inherit;
      padding: 0;
      background: none;
      font-size: 0.8rem;
    }
  }

  img {
    max-width: 100%;
    height: auto;
  }

  blockquote {
    padding-left: 1rem;
    border-left: 2px solid rgba(#0D0D0D, 0.1);
  }

  hr {
    border: none;
    border-top: 2px solid rgba(#0D0D0D, 0.1);
    margin: 2rem 0;
  }
}
</style>
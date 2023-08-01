<script setup lang="ts">
import { type INote } from 'components/AsideNote.vue';

const showNoteList = ref<boolean>(false);
const canEditNote = ref<boolean>(false);
const activeNote = ref<number>(0);
let notes = reactive<INote[]>([]);
const localForage = useLocalForage();
const searchValue = ref<string>('');
const textarea = ref<string>('');

watch(searchValue, () => {
    const pattern = new RegExp(`${searchValue.value}`, "gi");
    const text = notes[activeNote.value].description;
    textarea.value = text.replace(pattern, `<mark>${searchValue.value}</mark>`)
})

if (process.client) {
    openStore();
}

async function openStore() {
    const storeKeys = await localForage.keys();
    storeKeys.reverse().forEach(async (key) => {
        const getItem = await localForage.getItem(`${key}`)
        notes.push(getItem as INote)
    })
}

function addNewNote() {
    const newNote = {
        id: Date.now(),
        title: 'New Note',
        dateFull: new Date(Date.now()).toLocaleString(),
        dateTime: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        miniDescription: 'No additional text',
        description: 'No additional text'
    };
    localForage.setItem(`${newNote.id}`, newNote);
    notes.unshift(newNote);
    setActiveNote(0);
}

function setActiveNote(index: number) {
    canEditNote.value = false;
    activeNote.value = index;
    showNoteList.value = false;
}

function deleteNote() {
    if (window.confirm("Do you really want to delete this Note?")) {
        localForage.removeItem(`${notes[activeNote.value].id}`)
        notes.splice(activeNote.value, 1);
    }
}

function saveChanges() {
    const thisNote = notes[activeNote.value];
    const splittedText = thisNote.description.split('\n');
    thisNote.title = splittedText[0];
    thisNote.miniDescription = splittedText[1];

    localForage.removeItem(`${thisNote.id}`);
    const item = JSON.parse(JSON.stringify(thisNote));
    localForage.setItem(`${item.id}`, item);
}
</script>

<template>
    <div class="wrapper">
        <aside :class="{ 'show': showNoteList }">
            <header>
                <button @click="addNewNote">
                    <Icon name="material-symbols:add" />
                </button>
                <button @click="deleteNote">
                    <Icon name="simple-line-icons:trash" />
                </button>
            </header>
            <div class="note__wrapper">
                <AsideNote v-for="(note, index) in notes" :key="note.id" :note="note" :activeNote="index == activeNote"
                    @click="setActiveNote(index)" />
            </div>
        </aside>
        <main>
            <header>
                <button class="button__to__notes" @click="showNoteList = !showNoteList">
                    <Icon name="formkit:arrowleft" /> Notes
                </button>
                <button :class="['edit', { 'active': canEditNote }]" @click="canEditNote = !canEditNote">
                    <Icon name="bx:edit" />
                </button>
                <SearchInput v-model="searchValue" />
            </header>
            <template v-if="notes.length">
                <div class="main__date">{{ notes[activeNote].dateFull }}</div>
                <!-- TODO: no clue how to combine search with textarea correctly-->
                <div v-if="searchValue" v-html="textarea"></div>
                <textarea v-else v-model="notes[activeNote].description" placeholder="No additional text"
                    :readOnly="!canEditNote" @blur="saveChanges" :autofocus="canEditNote"
                    :class="{ 'focused': canEditNote }"></textarea>
            </template>
        </main>
    </div>
</template>

<style lang="scss" scoped>
.note__wrapper {
    max-height: calc(100vh - $size_large - 40px - $size_large);
    overflow-y: auto;

    &::-webkit-scrollbar {
        width: 0;
    }
}

.button__to__notes {
    @include mobile_only {
        display: flex;
        align-items: center;

        .icon {
            margin-right: $size_small;
        }
    }

    @include more_then_mobile {
        display: none;
    }
}
</style>
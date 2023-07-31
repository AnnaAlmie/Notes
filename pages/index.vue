<script setup lang="ts">
import { type INote } from 'components/AsideNote.vue';

const showNoteList = ref<boolean>(false);
const canEdit = ref<boolean>(false);

let notes: INote[] = reactive([
    {
        id: 3,
        title: "note 2 sdsdfs sdfsf sf s df dfdf df dfd ",
        dateTime: '12:23',
        dateFull: '23/23/344',
        description: 'dfdfhg s sf sdf sd sd sds dffd f df df f df df',
        active: true
    },
    {
        id: 2,
        title: "note 1",
        dateTime: '12:26',
        dateFull: '23/23/344',
        description: 'dfdf'
    },
    {
        id: 3,
        title: "note 4",
        dateTime: '12:22',
        dateFull: '23/23/344',
        description: 'dfdf'
    },
    {
        id: 3,
        title: "note 4",
        dateTime: '12:22',
        dateFull: '23/23/344',
        description: 'dfdf'
    },
    {
        id: 3,
        title: "note 4",
        dateTime: '12:22',
        dateFull: '23/23/344',
        description: 'dfdf'
    },
    {
        id: 3,
        title: "note 4",
        dateTime: '12:22',
        dateFull: '23/23/344',
        description: 'dfdf'
    },
    {
        id: 3,
        title: "note 4",
        dateTime: '12:22',
        dateFull: '23/23/344',
        description: 'dfdf'
    },
    {
        id: 3,
        title: "note 4",
        dateTime: '12:22',
        dateFull: '23/23/344',
        description: 'dfdf'
    },
    {
        id: 3,
        title: "note 4",
        dateTime: '12:22',
        dateFull: '23/23/344',
        description: 'dfdf'
    },
    {
        id: 3,
        title: "note 4",
        dateTime: '12:22',
        dateFull: '23/23/344',
        description: 'dfdf'
    },
    {
        id: 3,
        title: "note 4",
        dateTime: '12:22',
        dateFull: '23/23/344',
        description: 'dfdf'
    },
    {
        id: 3,
        title: "note 4",
        dateTime: '12:22',
        dateFull: '23/23/344',
        description: 'dfdf'
    },
    {
        id: 3,
        title: "note 4",
        dateTime: '12:22',
        dateFull: '23/23/344',
        description: 'dfdf'
    },
    {
        id: 3,
        title: "note 4",
        dateTime: '12:22',
        dateFull: '23/23/344',
        description: 'dfdf'
    },
    {
        id: 3,
        title: "note 4",
        dateTime: '12:22',
        dateFull: '23/23/344',
        description: 'dfdf'
    },
    {
        id: 3,
        title: "note 4",
        dateTime: '12:22',
        dateFull: '23/23/344',
        description: 'dfdf'
    }
]);

</script>

<template>
    <div class="wrapper">
        <aside :class="{ 'show': showNoteList }">
            <header>
                <button>
                    <Icon name="material-symbols:add" />
                </button>
                <button>
                    <Icon name="simple-line-icons:trash" />
                </button>
            </header>
            <div class="note__wrapper">
                <AsideNote v-for=" note  in  notes " :key="note.id" v-bind="note" />
            </div>
        </aside>
        <main>
            <header>
                <button class="button__to__notes" @click="showNoteList = !showNoteList">
                    <Icon name="formkit:arrowleft" /> Notes
                </button>
                <button :class="['edit', { 'active': canEdit }]" @click="canEdit = !canEdit">
                    <Icon name="bx:edit" />
                </button>
                <SearchInput />
            </header>
            <div class="main__date">23/23/344 12:22</div>
            <textarea name="activeNote" placeholder="No additional text" :class="{ 'active': canEdit }"></textarea>
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
<script setup lang="ts">
const notes = [
    { id: 1 }, { id: 2 }
]

</script>

<template>
    <aside>
        <header>
            <button>
                <Icon name="material-symbols:add" />
            </button>
            <button>
                <Icon name="simple-line-icons:trash" />
            </button>
        </header>
        <AsideNote v-for="note in notes" :key="note.id" />
    </aside>
    <main>
        <header>
            <button>
                <Icon name="bx:edit" />
            </button>
            <SearchInput />
        </header>
        <div>Date</div>
        <textarea name="" id="" cols="30" rows="10"></textarea>
    </main>
</template>

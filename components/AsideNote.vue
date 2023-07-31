<script setup lang="ts">

export interface INote {
    id: number,
    title: string,
    dateFull: Date | string,
    dateTime: Date | string,
    description: string,
    active?: boolean
}

withDefaults(defineProps<INote>(), {
    id: Date.now(),
    title: 'New Note',
    dateFull: new Date(Date.now()).toLocaleString(),
    dateTime: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    description: 'No additional text'
})

</script> 

<template>
    <div :class="['note', { 'active': active }]">
        <h4 class="note__title text__overflow">{{ title }}</h4>
        <div class="note__descriprion">
            <date>{{ dateTime }}</date>
            <span class="text__overflow">{{ description }}</span>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.note {
    position: relative;
    border-top: 1px solid $color_grey_light;
    padding: $size;
    cursor: pointer;

    &::after {
        content: '';
        position: absolute;
        top: 0;
        left: -$size;
        width: calc(100% + $size);
        height: 100%;
        background-color: transparent;
        transition: $transition_all;
        z-index: -1;

    }

    &.active {
        &::after {
            background-color: $color_active;

        }
    }

    &:not(.active):hover::after {
        background-color: $color_grey_light;
    }

    &__title {
        margin: 0;
        line-height: 1.5;
    }

    &__descriprion {
        display: flex;

        date {
            margin-right: $size_small;
        }

        span {
            color: $color-grey;
        }
    }
}
</style>
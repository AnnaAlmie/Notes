<script setup lang="ts">
defineProps<{
    modelValue: String
}>()

defineEmits<{
    "update:modelValue": [value: string]
}>()
</script>

<template>
    <div class="search">
        <Icon name="iconamoon:search-light" />
        <input type="text" placeholder="Search" :value="modelValue"
            @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)" />
    </div>
</template>

<style scoped lang="scss">
.search {
    border: 1px solid $color_grey_light;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 2px;

    .icon {
        margin-right: $size;
    }

    input {
        all: unset;
        max-width: 150px;
    }

}
</style>
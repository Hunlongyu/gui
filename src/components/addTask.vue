<template>
    <n-modal v-model:show="showModal" transform-origin="center">
        <n-card style="max-width: 600px" title="添加下载任务" bordered closable @close="cancel">
            <template #header-extra>
                噢！
            </template>
            内容
            <template #footer>
                footer
            </template>
            <template #action>
                <n-button @click="confirm">确认</n-button>
                <n-button @click="cancel">取消</n-button>
            </template>
        </n-card>
    </n-modal>
</template>

<script setup>
import { defineEmits } from 'vue'
const showModal = defineModel(false, { required: true, default: false })

const emit = defineEmits(['addTaskConfirm', 'addTaskCancel'])

function confirm() {
    emit('addTaskConfirm')
    showModal.value = false
}

function cancel() {
    emit('addTaskCancel')
    showModal.value = false
}
</script>
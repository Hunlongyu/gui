<template>
    <div class="download">
        <n-layout-header border class="download-header">
            <n-popover trigger="hover">
                <template #trigger>
                    <n-button circle>
                        <n-icon size="20">
                            <Add />
                        </n-icon>
                    </n-button>
                </template>
                <span>添加下载任务</span>
            </n-popover>
            <n-button circle>
                <n-icon size="20">
                    <Download />
                </n-icon>
            </n-button>
            <n-button circle>
                <n-icon size="20">
                    <Pause />
                </n-icon>
            </n-button>
            <n-button circle>
                <n-icon size="20">
                    <Delete />
                </n-icon>
            </n-button>
            <n-button circle>
                <n-icon size="20">
                    <MergeCells />
                </n-icon>
            </n-button>
        </n-layout-header>
        <n-layout-content class="download-content" :native-scrollbar="false">
            <p>p</p>
            <p>p</p>
        </n-layout-content>
        <n-layout-footer class="download-footer">
            footer
        </n-layout-footer>
    </div>
</template>

<script setup>
import { Add, Download, Pause, Delete, MergeCells } from '@icon-park/vue-next'
</script>

<style lang="scss" scoped>
.download {
    height: 100%;
    display: grid;
    grid-template-rows: 60px 1fr 40px;

    .download-header {
        display: flex;
        align-items: center;
        justify-content: flex-start;

        button {
            margin-left: 20px;
        }
    }

    .download-content {
        overflow: auto;
    }

    .download-footer {}
}
</style>
<template>
    <n-space vertical size="large">
        <n-layout has-sider position="absolute">
            <n-layout-sider bordered collapse-mode="width" :collapsed-width="64" :width="120" :native-scrollbar="false">
                <n-menu :collapsed-width="64" :collapsed-icon-size="20" :options="menuOptions"
                    @update:value="menuSelect" />
            </n-layout-sider>
            <n-layout>
                <router-view></router-view>
            </n-layout>
        </n-layout>
    </n-space>
</template>

<script setup>
import { NIcon } from 'naive-ui'
import { DownloadOne, SettingOne, ApiApp } from '@icon-park/vue-next'
import router from '../router'
const menuOptions = [
    {
        label: '下载',
        key: 'hear-the-wind-sing',
        path: 'download',
        icon: renderIcon(DownloadOne)
    },
    {
        label: '设置',
        key: 'settings',
        path: 'settings',
        icon: renderIcon(SettingOne)
    },
    {
        label: '关于',
        key: 'about',
        path: 'about',
        icon: renderIcon(ApiApp)
    }
]

function renderIcon(icon) {
    return () => h(NIcon, null, { default: () => h(icon) })
}

function menuSelect(key, item) {
    router.push(item.path)
}
</script>

<style lang="scss" scoped></style>
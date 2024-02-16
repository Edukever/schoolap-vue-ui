<script>
export default {
    name: 'SPLineProgress',
    props: {
        percentage: {
            type: Number,
            required: true
        },
        color: {
            type: String,
            default: '#F68C2C'
        }
    }
};
</script>
<template>
    <div class="sp-line-progress">
        <div class="progress-bar">
            <div class="progress-bar__percentage" :style="{color: color}">{{ percentage }}%</div>
            <div class="progress-bar__track">
                <div class="progress-bar__thumb" :style="{ width: `${percentage}%`, backgroundColor: color }"></div>
            </div>
        </div>
    </div>
</template>

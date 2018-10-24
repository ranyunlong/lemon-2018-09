<template>
   <div
        class="swicher"
        @click="toggle"
        :style="{
            backgroundColor: iValue ? color : ''
        }"
        :class="{
            on: iValue,
            lg: large,
            sm: small
        }">
        <div class="btn"></div>
    </div>
</template>

<script>
    export default {
        props: {
            value: Boolean,
            // size: String, // large small
            large: Boolean,
            small: Boolean,
            color: {
                type: String,
                default: 'red'
            }
        },
        inheritAttrs: false, // 就不会继承prop显式 特性 除了class属性和style属性以外
        watch: {
            value(val) {
                this.iValue = val
            },
            iValue(val) {
                this.$emit('input', val)
            }
        },
        data() {
            return {
                iValue: this.value
            }
        },
        methods: {
            toggle() {
                this.iValue = !this.iValue
            }
        }
    }
</script>

<style scoped>
.swicher{
    width: 44px;
    height: 20px;
    background: #ccc;
    border-radius: 11px;
    cursor: pointer;
    display: inline-block;
    padding: 1px;
    transition: background 0.5s linear;
}

.swicher.lg {
    width: 56px;
}

.swicher.sm {
    width: 28px;
    height: 16px;
    border-radius: 8.5px;
}

.swicher.on {
    /* background: orangered; */
}


.swicher .btn {
    width: 20px;
    height: 20px;
    border-radius: 10px;
    background: #fff;
    transition: transform 0.2s linear;
}

.swicher.sm .btn {
    width: 16px;
    height: 16px;
    border-radius: 8px;
}

.swicher.on .btn {
    transform: translateX(24px);
    border-radius: 10px;
    background: #fff;
}

.swicher.sm.on .btn {
    transform: translateX(13px);
}   

.swicher.lg.on .btn {
    transform: translateX(36px);
}
</style>
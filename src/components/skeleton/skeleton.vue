<template>
    <div class="skelet">
        <div class="circul">
            <div class="grad"></div>
        </div>
        <div class="lines">
            <div class="line"></div>
            <div class="line"></div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'skeleton'
}
</script>

<style lang="scss">
.skelet{
    width: 170px;
    height: 100px;
    position: relative;
    display: flex;
    gap: 10px;
    .circul{
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background-color: #D9D9D9;
        .grad{
        background: linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.2) 49.48%, rgba(255, 255, 255, 0) 100%);
        height: 100%;
        width: 20px;
        animation: waves 2s ease infinite normal 0s forwards;
        position: absolute;
        }
    }
    .lines{
        display: flex;
        flex-direction: column;
        gap: 10px;
        align-items: center;

        .line{
            height: 7px;
            width: 100px;
            background-color: #D9D9D9;
        }
    }
}
@keyframes waves{
    0%{
        left: -10px;
    }
    60% {
        left: 100%;
    } 
    100%{
        left: 100%;
    }
}
</style>
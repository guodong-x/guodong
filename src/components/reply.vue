<template>
    <div>
        <li v-for="value in reply" :key="value.commentReplyid">
            <p class="reply">
                <span class="commenter">{{replyName?`${value.userName} to ${replyName}`:value.userName}}: </span>
                <span>{{value.commentContent?value.commentContent:value.replyContent}}</span>
                
                <reply :reply="value.replys" :replyName="value.userName"/>
            </p>
        </li>
    </div>
</template>

<script>
export default {
    name: 'reply',
    props: {
        reply: {
            type: Array,
            default: ()=>{return []}
        },
        replyName: {
            type: String,
            default: ''
        }
    }
}
</script>

<style lang="scss">
    .commenter{
        color: hotpink;
    }
    .reply{
        margin: .1rem 0;
    }
</style>
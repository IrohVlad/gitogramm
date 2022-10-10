import post from './post'
export default {
    title: "post",
    components: { post },
    argTypes: {
        title: {
            control: { type: 'text' }
        },
        disc: {
            control: { type: 'text' }
        },
        stars: {
            control: { type: 'text' }
        },
        reposts: {
            control: { type: 'text' }
        },
        issus: {
            control: 'object'
        }
    }
}

export const defaultView = (args) => (
    {
        data () {
            return {
                args
            }
        },
        components: { post },
        template: '<post :="args" ><template v-slot:user><toplineuser :showname="true" nickname="nick"><template v-slot:img ><img src="../../assets/avatar.svg" alt=""/></template></toplineuser></template></post>'
    }
)

defaultView.story = {
    name: "Стандартный вид"
}
defaultView.args = {
    title: 'Title',
    disc: 'discription',
    stars: '10',
    reposts: '10',
    issus: [{ name: `joshua_l`, text: `Enable performance measuring in production, at the users request` }, { name: `joshua_l`, text: `Enable performance measuring in production, at the users request` }]
}
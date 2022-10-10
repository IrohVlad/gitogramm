import button from './button'

export default {
    title: 'button',
    components: {
        xbutton: button 
    },
    argTypes: {
        text: { control: { type: 'text' } },
        hovertext: { control: { type: 'text' } }
    }
}

export const defaultView = (args) => ({
    data () {
        return {
            args
        }
    },
    components: {
        xbutton: button 
    },
    template: '<xbutton :="args"></xbutton>'
})

defaultView.args = {
    text: "follow",
    hovertext: "unfollow"
}
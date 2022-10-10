import topline from './topline';
export default {
    title: 'topline',
    components: { topline },
}

export const defaultView = () => ({
    components: { topline },
    template: '<topline><template v-slot:headline>Gitogram/</template><template v-slot:content><img class="icon" src="../../assets/Home.svg" alt=""/><toplineuser :showname="false" ><template v-slot:img><img src="../../assets/avatar.svg" alt=""/></template></toplineuser><img class="icon" src="../../assets/out.svg" alt=""/></template></topline>'
})

defaultView.story = {
    name: "Стандартный вид"
}
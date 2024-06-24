app.component("review-list", {
    props: {
        reviews : {
            type: Array,
            required: true
        }
    },
    template: 
        /*html*/
        `
            <div class="review-container">
                <h3>Comentários:</h3>
                <ul>
                    <li v-for="(review, index) in reviews" :key="index">
                        {{ review.nome }} avaliou com {{ review.avaliacao }} estrelas
                        <br />
                        "{{ review.comentario }}"
                    </li>
                </ul>
            </div>
        `
});
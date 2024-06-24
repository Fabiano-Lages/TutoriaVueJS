app.component('product-display', {
    props: {
        premium: {
            type: Boolean,
            required: true
        }        
    },
    template: 
        /* html */
        `<div class="product-display">
            <div class="product-container">
                <div class="product-image" :class="{ esgotado: !inStock }">
                    <h3></h3>
                    <img :src="image" />
                </div>
                <div class="product-info">
                    <h1>{{ title }}</h1>
                    <p>{{ description }}</p>
                    <p v-if="inStock">Em estoque</p>
                    <p v-else>Indisponível</p>
                    <p>Frete: {{ shipping }} </p>
                    <ul>
                        <li v-for="detail in details">{{ detail }}</li>
                    </ul>
                    <div class="product-colors">
                        <div v-for="(variant, index) in variants" 
                            :key="variant.id" 
                            v-on:mouseover="updateVariant(index)" 
                            class="color-circle"
                            :style="{backgroundColor: variant.color }">
                        </div>
                    </div>
                    <button 
                        class="button" 
                        :class="{ disabledButton: !inStock }"
                        :disabled="!inStock"
                        type="button" 
                        v-on:click="addToCart">
                            Adicionar ao carrinho
                    </button>
                </div>
            </div>
            <review-list v-if='reviews.length' :reviews='reviews'></review-list>
            <review-form @review-submitted='addReview'></review-form>
        </div>`,
    data() {
        return {
            name: "Meias",
            brand: "Maestria Vue",
            description: "Meias hyper confortáveis.",
            selectedVariant: 0,
            details: [
                "50% cotton",
                "30% wool",
                "20% polyester"
            ],
            variants: [
                { id: 2234, color: "green", image: "./assets/images/socks_green.jpg", quantity: 50 },
                { id: 2235, color: "blue", image: "./assets/images/socks_blue.jpg", quantity: 0 }
            ],
            reviews: []
        }
    },
    methods: {
        addToCart() {
            this.$emit("add-to-cart", this.variants[this.selectedVariant].id);
        },
        updateVariant(index) {
            this.selectedVariant = index;
        },
        addReview(comentario) {
            this.reviews.push(comentario);
        }
    },
    computed: {
        title() {
            return(`${this.brand} ${this.name}`)
        },
        inStock() {
            return(this.variants[this.selectedVariant].quantity > 0);
        },
        image() {
            return(this.variants[this.selectedVariant].image);
        },
        shipping() {
            let retorno = "2,99";
            if(this.premium) {
                retorno = 'Grátis';
            } 
            return(retorno);
        }
    }
});
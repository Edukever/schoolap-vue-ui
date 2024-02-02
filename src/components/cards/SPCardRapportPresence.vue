<template>
    <div class="sp-card-rapport-presence">
        <div class="sp-card-rapport-presence-header">
            <div class="sp-user-info">
                <div class="sp-user-info-content">
                    <div class="sp-picture">
                        <img src="https://images.unsplash.com/photo-1706354924659-582cec69ce3b?q=80&w=2200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="picture">
                    </div>
                    <div class="sp-identity">
                        <h3 class="sp-identity-name">{{ username }}</h3>
                        <p class="sp-identity-sub">{{ gender }}</p>
                    </div>
                </div>
            </div>
            <div class="sp-status-user">
                <div class="sp-status" :class="{'absent': isPresent}"></div>
            </div>
        </div>

        <div class="sp-card-rapport-presence-body" v-if="isPresent">
            <p>
                {{ justification }}
            </p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SPCardRapportPresence',
    props: {
        isPresent : {
            type: Boolean,
            default: false
        },
        gender : {
            type: String,
            default: 'Homme'
        },
        justification:{
            type: String,
            default: ''
        },
        username:{
            type: String,
            default: 'John Doe'
        }
    }
}
</script>
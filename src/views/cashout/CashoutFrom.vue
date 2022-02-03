<template>
<v-card>
    <div class="d-flex flex-sm-row flex-column">
        <div class="flex-grow-1">
            <v-card-title>
                <span class="me-3">Loyalty Canabit Point</span>
                <v-spacer></v-spacer>
            </v-card-title>
            <div class="space-y-16 mt-2">
                <div class="md:max-w-xl w-96 h-56 m-auto bg-red-100 rounded-xl relative text-white shadow-lg transition-transform transform hover:scale-110 ">
                    <img class="relative object-cover w-full h-full rounded-xl" src="https://i.imgur.com/kGkSg1v.png">
                    <div class="w-full px-8 absolute top-8">
                        <div class="">
                            <div class="flex justify-between">
                                <p class="font-light">
                                    Name
                                </p>
                                <p class="font-medium tracking-widest">
                                    Karthik P
                                </p>
                            </div>

                        </div>
                        <div class="pt-1 flex justify-between">

                            <p class="font-light">
                                Point Number
                            </p>
                            <p class="font-medium tracking-more-wider">
                                12,345,789 point
                            </p>
                        </div>

                        <div class="flex justify-between mt-4">
                            <div class="">
                                <p class="font-light text-xs">
                                    Valid

                                    <p class="font-medium tracking-wider text-sm">
                                        11/15
                                    </p>
                            </div>
                            <div class="">
                                <p class="font-light text-xs text-xs">
                                    Expiry

                                    <p class="font-medium tracking-wider text-sm">
                                        03/25
                                    </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="ml-48 mr-48 mt-4 justify-center">
                <div class="flex justify-between">
                    <v-chip class="ma-2" color="warning" text-color="white" x-small>
                        Gold
                    </v-chip>

                    <v-chip class="ma-2" color="info" text-color="white" x-small>
                        Platinum
                    </v-chip>

                </div>
                <v-progress-linear value="15" height="10" rounded class="mb-18">
                </v-progress-linear>
                <p class="font-medium tracking-more-wider text-center text-xs mt-2">12,345,789 point / from 50,000,000 point</p>
            </div>
        </div>
        <v-divider class="my-sm-5 mx-5" :vertical="$vuetify.breakpoint.smAndUp"></v-divider>

        <div class="w-11/12 p-12 bg-white sm:w-8/12 md:w-1/2 lg:w-5/12">
        
            <h1 class="text-xl font-semibold mb-8">Hello there 👋, <span class="font-normal">please fill in your information to continue</span></h1>
            <v-form>
                <v-row>
                    <v-col cols="12" md="3">
                        <label for="firstname">Name</label>
                    </v-col>

                    <v-col cols="12" md="9">
                        <v-text-field id="firstname" outlined dense placeholder="First Name" hide-details></v-text-field>
                    </v-col>

                    <v-col cols="12" md="3">
                        <label for="email">Bank number</label>
                    </v-col>

                    <v-col cols="12" md="9">
                        <v-text-field id="email" outlined dense placeholder="*******" hide-details></v-text-field>
                    </v-col>
                    <v-col cols="12" md="3">
                        <label for="password">Bank name</label>
                    </v-col>

                    <v-col cols="12" md="9">
                        <v-text-field id="password" type="name" outlined dense placeholder="enter bank name" hide-details></v-text-field>
                    </v-col>
                    <v-btn color="info" class="w-full py-3 mt-6 font-medium">
                        Cashout
                    </v-btn>
                </v-row>
            </v-form>
        </div>
    </div>
</v-card>
</template>

<script>
export default {
    setup() {
        const History = [{
                img: require('@/assets/images/logos/google.png'),
                title: 'Google Adsense',
                subtitle: '211101CP50NNH',
                amount: '+957',
            },
            {
                img: require('@/assets/images/logos/github.png'),
                title: 'Github Enterprise',
                subtitle: '211101CP50NNH',
                amount: '+$446',
            },
            {
                img: require('@/assets/images/logos/slack.png'),
                title: 'Upgrade Slack Plan',
                subtitle: '211101CP50NNH',
                amount: '+$957',
            },
            {
                img: require('@/assets/images/logos/digital-ocean-logo.png'),
                title: 'Digital Ocean',
                subtitle: '211101CP50NNH',
                amount: '+$92,705',
            },
            {
                img: require('@/assets/images/logos/amazon-web-services-logo.png'),
                title: 'Bank Account',
                subtitle: '211101CP50NNH',
                amount: '+$21',
            },
        ]

        return {
            History,
        }
    },
}
</script>

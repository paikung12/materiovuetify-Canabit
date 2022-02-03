<template>
<v-card flat class="mt-5">
    <v-form>
        <div class="px-3 mt-15 mb-5">
            <v-card-text class="pt-5">
                <v-row>
                    <v-col cols="12" sm="8" md="6">
                        <!-- current password -->
                        <v-expansion-panels inset>
                            <v-expansion-panel>
                                <v-expansion-panel-header>1. Verification of identity by uploading a picture of an ID card </v-expansion-panel-header>
                                <v-expansion-panel-content>
                                    Cupcake ipsum dolor sit amet. Candy canes cheesecake chocolate bar I love I love jujubes gummi bears ice cream.
                                    Cheesecake tiramisu toffee cheesecake sugar plum candy canes bonbon candy.
                                    <v-card-actions class="primary pa-0 mt-10">
                                        <v-btn color="primary" block dark large @click="$refs.refInputEl.click()">
                                            upload picture
                                        </v-btn>
                                        <input ref="refInputEl" type="file" accept=".jpeg,.png,.jpg,GIF" :hidden="true" />
                                    </v-card-actions>
                                </v-expansion-panel-content>
                            </v-expansion-panel>
                            <v-expansion-panel>
                                <v-expansion-panel-header>2. Verify your identity by uploading a picture of your account number </v-expansion-panel-header>
                                <v-expansion-panel-content>
                                    Cupcake ipsum dolor sit amet. Candy canes cheesecake chocolate bar I love I love jujubes gummi bears ice cream.
                                    Cheesecake tiramisu toffee cheesecake sugar plum candy canes bonbon candy.
                                    <v-card-actions class="primary pa-0 mt-10">
                                        <v-btn color="primary" block dark large @click="$refs.refInputEl.click()">
                                            upload picture
                                        </v-btn>
                                        <input ref="refInputEl" type="file" accept=".jpeg,.png,.jpg,GIF" :hidden="true" />
                                    </v-card-actions>
                                </v-expansion-panel-content>
                            </v-expansion-panel>
                            <v-expansion-panel>
                                <v-expansion-panel-header>3. Phone number OTP (one-time-password) </v-expansion-panel-header>
                                <v-expansion-panel-content>
                                    Cupcake ipsum dolor sit amet. Candy canes cheesecake chocolate bar I love I love jujubes gummi bears ice cream.
                                    Cheesecake tiramisu toffee cheesecake sugar plum candy canes bonbon candy.
                                </v-expansion-panel-content>
                            </v-expansion-panel>
                        </v-expansion-panels>
                    </v-col>

                    <v-col cols="12" sm="4" md="6" class="d-none d-sm-flex justify-center position-relative md-8">
                        <v-img contain max-width="175" max-height="300" src="@/assets/images/3d-characters/pose-m-1.png" class="security-character "></v-img>
                    </v-col>
                </v-row>
            </v-card-text>
        </div>
    </v-form>
     <v-divider></v-divider>
        <div class="pa-3">
            <v-card-title class="flex-nowrap">
                <v-icon class="text--primary me-3">
                    {{ icons.mdiKeyOutline }}
                </v-icon>
                <span class="text-break">KYC</span>
            </v-card-title>

            <v-card-text class="two-factor-auth text-center mx-auto">
                <v-avatar color="primary" class="primary mb-4" rounded>
                    <v-icon size="25" color="white">
                        {{ icons.mdiLockOpenOutline }}
                    </v-icon>
                </v-avatar>
                <p class="text-base text--primary font-weight-semibold">
                    Know Your Custome
                </p>
                <p class="text-sm text--primary">
                    check is the mandatory process of identifying and  verifying the client's identity when opening an account
                </p>
            </v-card-text>
            <!-- action buttons -->
        </div>
</v-card>
</template>

<script>
// eslint-disable-next-line object-curly-newline
import {
    mdiKeyOutline,
    mdiLockOpenOutline,
    mdiEyeOffOutline,
    mdiEyeOutline
} from '@mdi/js'
import {
    ref
} from '@vue/composition-api'

export default {
    setup() {
        const isCurrentPasswordVisible = ref(false)
        const isNewPasswordVisible = ref(false)
        const isCPasswordVisible = ref(false)
        const currentPassword = ref('12345678')
        const newPassword = ref('87654321')
        const cPassword = ref('87654321')

        return {
            isCurrentPasswordVisible,
            isNewPasswordVisible,
            currentPassword,
            isCPasswordVisible,
            newPassword,
            cPassword,
            icons: {
                mdiKeyOutline,
                mdiLockOpenOutline,
                mdiEyeOffOutline,
                mdiEyeOutline,
            },
        }
    },
}
</script>

<style lang="scss" scoped>
.two-factor-auth {
    max-width: 25rem;
}

.security-character {
    position: absolute;
    bottom: -0.5rem;
}
</style>

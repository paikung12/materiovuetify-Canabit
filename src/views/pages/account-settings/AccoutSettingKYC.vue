<template>
<v-card flat class="mt-5">
    <v-form>
        <div class="px-3">
            <v-card-text class="pt-5">
                <v-row>
                    <v-col cols="12" sm="8" md="6">
                        <!-- KYC -->
                        <v-expansion-panels inset>
                            <v-expansion-panel>
                                <v-expansion-panel-header>1. Verification of identity by uploading a picture of an ID card</v-expansion-panel-header>
                                <v-expansion-panel-content>
                                    Chocolate bar sweet roll chocolate cake pastry I love gummi bears pudding chocolate cake. I love brownie powder apple pie sugar plum I love cake candy canes wafer. Tiramisu I love oat cake oat cake danish icing. Dessert sugar plum sugar plum cookie donut chocolate cake oat cake I love gummi bears.
                                </v-expansion-panel-content>
                            </v-expansion-panel>
                            <v-expansion-panel>
                                <v-expansion-panel-header>2. Verify your identity by uploading a picture of your account number</v-expansion-panel-header>
                                <v-expansion-panel-content>
                                    Chocolate bar sweet roll chocolate cake pastry I love gummi bears pudding chocolate cake. I love brownie powder apple pie sugar plum I love cake candy canes wafer. Tiramisu I love oat cake oat cake danish icing. Dessert sugar plum sugar plum cookie donut chocolate cake oat cake I love gummi bears.
                                </v-expansion-panel-content>
                            </v-expansion-panel>
                            <v-expansion-panel>
                                <v-expansion-panel-header>3. Verify your identity by uploading a picture of yourself taken with your ID.</v-expansion-panel-header>
                                <v-expansion-panel-content>
                                    Chocolate bar sweet roll chocolate cake pastry I love gummi bears pudding chocolate cake. I love brownie powder apple pie sugar plum I love cake candy canes wafer. Tiramisu I love oat cake oat cake danish icing. Dessert sugar plum sugar plum cookie donut chocolate cake oat cake I love gummi bears.
                                </v-expansion-panel-content>
                            </v-expansion-panel>
                            <v-expansion-panel>
                                <v-expansion-panel-header>4. Phone number OTP (one-time-password) </v-expansion-panel-header>
                                <v-expansion-panel-content>
                                    Chocolate bar sweet roll chocolate cake pastry I love gummi bears pudding chocolate cake. I love brownie powder apple pie sugar plum I love cake candy canes wafer. Tiramisu I love oat cake oat cake danish icing. Dessert sugar plum sugar plum cookie donut chocolate cake oat cake I love gummi bears.
                                </v-expansion-panel-content>
                            </v-expansion-panel>
                        </v-expansion-panels>
                    </v-col>
                    <v-col cols="12" sm="4" md="6" class="d-none d-sm-flex justify-center position-relative">
                        <v-img contain max-width="175" src="@/assets/images/3d-characters/pose-m-1.png" class="security-character"></v-img>
                    </v-col>
                </v-row>
            </v-card-text>
        </div>

        <!-- divider -->
        <v-divider></v-divider>

        <div class="pa-3">
            <v-card-title class="flex-nowrap">
                <v-icon class="text--primary me-3">
                    {{ icons.mdiKeyOutline }}
                </v-icon>
                <span class="text-break">Account Verification KYC</span>
            </v-card-title>

            <v-card-text class="two-factor-auth text-center mx-auto">
                <v-avatar color="primary" class="primary mb-4" rounded>
                    <v-icon size="25" color="white">
                        {{ icons.mdiLockOpenOutline }}
                    </v-icon>
                </v-avatar>
                <p class="text-base text--primary font-weight-semibold">
                    KYC (Know Your Custome)
                </p>
                <p class="text-sm text--primary">
                    check is the mandatory process of identifying and  verifying the client's identity when opening an account
                </p>
            </v-card-text>

            <!-- action buttons -->
            <v-card-text>
                <v-btn color="primary" class="me-3 mt-4">
                    Save changes
                </v-btn>
                <v-btn color="secondary" outlined class="mt-4">
                    Cancel
                </v-btn>
            </v-card-text>
        </div>
    </v-form>
</v-card>
</template>

<script>
// eslint-disable-next-line object-curly-newline
import {
    mdiKeyOutline,
    mdiLockOpenOutline,
    mdiEyeOffOutline,
    mdiEyeOutline,
    mdiNumeric1CircleOutline,
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
                mdiNumeric1CircleOutline,
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

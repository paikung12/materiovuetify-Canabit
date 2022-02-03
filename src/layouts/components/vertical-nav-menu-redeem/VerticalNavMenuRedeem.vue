<template>
  <v-navigation-drawer
    :value="isDrawerOpen"
    app
    floating
    width="260"
    class="app-navigation-menu"
    :right="$vuetify.rtl"
    @input="val => $emit('update:is-drawer-open', val)"
  >
    <!-- Navigation Header -->
    <div class="vertical-nav-header d-flex items-center ps-6 pe-5 pt-5 pb-2">
      <router-link
        to="/"
        class="d-flex align-center text-decoration-none"
      >
        <v-img
          :src="require('@/assets/images/logos/logo.svg')"
          max-height="30px"
          max-width="30px"
          alt="logo"
          contain
          eager
          class="app-logo me-3"
        ></v-img>
        <v-slide-x-transition>
          <h2 class="app-title text--primary">
            CATEGORIES
          </h2>
        </v-slide-x-transition>
      </router-link>
    </div>

    <!-- Navigation Items -->
    <v-list
      expand
      shaped
      class="vertical-nav-menu-items pr-5"
    >
    <NavMenuLinkRedeem
        title="Redeem Special"
        :to="{ name: 'redeemspecial' }"
        :icon="icons.mdiFire"
        >    
        </NavMenuLinkRedeem>
    <NavMenuGroupRedeem
        title="Electronics"
        :to="{ name: 'electronics' }"
        :icon="icons.mdiLightningBolt">
        <NavMenuLinkRedeem
        title="Dashboard"
        :to="{ name: 'dashboard' }"
        >    
        </NavMenuLinkRedeem>
        <NavMenuLinkRedeem
        title="Dashboard"
        :to="{ name: 'dashboard' }"
        >      
        </NavMenuLinkRedeem>
        <NavMenuLinkRedeem
        title="Dashboard"
        :to="{ name: 'dashboard' }"
        >          
        </NavMenuLinkRedeem>   
    </NavMenuGroupRedeem>
    <NavMenuGroupRedeem
        title="Beauty"
        :to="{ name: 'dashboard' }"
        :icon="icons.mdiLipstick"
        >
        <NavMenuLinkRedeem
        title="Dashboard"
        :to="{ name: 'dashboard' }"
        >
            
        </NavMenuLinkRedeem>
        <NavMenuLinkRedeem
        title="Dashboard"
        :to="{ name: 'dashboard' }"
        >    
        </NavMenuLinkRedeem>
        <NavMenuLinkRedeem
        title="Dashboard"
        :to="{ name: 'dashboard' }"
        >   
        </NavMenuLinkRedeem>   
    </NavMenuGroupRedeem> 
    <NavMenuGroupRedeem
        title="Travel"
        :to="{ name: 'dashboard' }"
        :icon="icons.mdiAirplane">
        <NavMenuLinkRedeem
        title="Dashboard"
        :to="{ name: 'dashboard' }"
        >      
        </NavMenuLinkRedeem>
        <NavMenuLinkRedeem
        title="Dashboard"
        :to="{ name: 'dashboard' }"
        >      
        </NavMenuLinkRedeem>
        <NavMenuLinkRedeem
        title="Dashboard"
        :to="{ name: 'dashboard' }"
        >      
        </NavMenuLinkRedeem>   
    </NavMenuGroupRedeem>  
      <NavMenuGroupRedeem
        title="Fashion"
        :to="{ name: 'dashboard' }"
        :icon="icons.mdiTshirtCrew">
        <NavMenuLinkRedeem
        title="Dashboard"
        :to="{ name: 'dashboard' }"
        >      
        </NavMenuLinkRedeem>
        <NavMenuLinkRedeem
        title="Dashboard"
        :to="{ name: 'dashboard' }"
        
        >      
        </NavMenuLinkRedeem>
        <NavMenuLinkRedeem
        title="Dashboard"
        :to="{ name: 'dashboard' }"
        
        >      
        </NavMenuLinkRedeem>   
    </NavMenuGroupRedeem> 
    <NavMenuGroupRedeem
        title="Delivery"
        :to="{ name: 'dashboard' }"
        :icon="icons.mdiMopedOutline">
        <NavMenuLinkRedeem
        title="Dashboard"
        :to="{ name: 'dashboard' }"
        
        >      
        </NavMenuLinkRedeem>
        <NavMenuLinkRedeem
        title="Dashboard"
        :to="{ name: 'dashboard' }"
        
        >      
        </NavMenuLinkRedeem>
        <NavMenuLinkRedeem
        title="Dashboard"
        :to="{ name: 'dashboard' }"
        
        >      
        </NavMenuLinkRedeem>   
    </NavMenuGroupRedeem> 
    <NavMenuGroupRedeem
        title="Foods"
        :to="{ name: 'dashboard' }"
        :icon="icons.mdiFood">
        <NavMenuLinkRedeem
        title="Dashboard"
        :to="{ name: 'dashboard' }"
        
        >      
        </NavMenuLinkRedeem>
        <NavMenuLinkRedeem
        title="Dashboard"
        :to="{ name: 'dashboard' }"
        
        >      
        </NavMenuLinkRedeem>
        <NavMenuLinkRedeem
        title="Dashboard"
        :to="{ name: 'dashboard' }"
        
        >      
        </NavMenuLinkRedeem>   
    </NavMenuGroupRedeem> 
    <NavMenuGroupRedeem
        title="Sport"
        :to="{ name: 'dashboard' }"
        :icon="icons.mdiBasketball">
        <NavMenuLinkRedeem
        title="Dashboard"
        :to="{ name: 'dashboard' }"
        
        >      
        </NavMenuLinkRedeem>
        <NavMenuLinkRedeem
        title="Dashboard"
        :to="{ name: 'dashboard' }"
        
        >      
        </NavMenuLinkRedeem>
        <NavMenuLinkRedeem
        title="Dashboard"
        :to="{ name: 'dashboard' }"
       
        >      
        </NavMenuLinkRedeem>   
    </NavMenuGroupRedeem> 
    </v-list>
  </v-navigation-drawer>
</template>

<script>
// eslint-disable-next-line object-curly-newline
import {
  mdiHomeOutline,
  mdiAlphaTBoxOutline,
  mdiEyeOutline,
  mdiCreditCardOutline,
  mdiTable,
  mdiFileOutline,
  mdiFormSelect,
  mdiAccountCogOutline,
  mdiBankTransfer,
  mdiHandshakeOutline,
  mdiLightningBolt,
  mdiLipstick,
  mdiAirplane,
  mdiTshirtCrew,
  mdiMopedOutline,
  mdiFood,
  mdiBasketball,
  mdiFire,


} from '@mdi/js'
import NavMenuGroupRedeem from '@/layouts/components/vertical-nav-menu-redeem/components/NavMenuGroupRedeem'
import NavMenuLinkRedeem from '@/layouts/components/vertical-nav-menu-redeem/components/NavMenuLinkRedeem'
import NavMenuSectionTitleRedeem from '@/layouts/components/vertical-nav-menu-redeem/components/NavMenuSectionTitleRedeem'

export default {
  components: {
    NavMenuGroupRedeem,
    NavMenuLinkRedeem,
    NavMenuSectionTitleRedeem,
  },
  props: {
    isDrawerOpen: {
      type: Boolean,
      default: null,
    },
  },
  setup() {
    return {
      icons: {
        mdiHomeOutline,
        mdiAlphaTBoxOutline,
        mdiEyeOutline,
        mdiCreditCardOutline,
        mdiTable,
        mdiFileOutline,
        mdiFormSelect,
        mdiAccountCogOutline,
        mdiBankTransfer,
        mdiHandshakeOutline,
        mdiLightningBolt,
        mdiLipstick,
        mdiAirplane,
        mdiTshirtCrew,
        mdiMopedOutline,
        mdiFood,
        mdiBasketball,
        mdiFire
      },
    }
  },
}
</script>

<style lang="scss" scoped>
.app-title {
  font-size: 1.25rem;
  font-weight: 700;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 0.3px;
}

// ? Adjust this `translateX` value to keep logo in center when vertical nav menu is collapsed (Value depends on your logo)
.app-logo {
  transition: all 0.18s ease-in-out;
  .v-navigation-drawer--mini-variant & {
    transform: translateX(-4px);
  }
}

@include theme(app-navigation-menu) using ($material) {
  background-color: map-deep-get($material, 'background');
}

.app-navigation-menu {
  .v-list-item {
    &.vertical-nav-menu-link {
      ::v-deep .v-list-item__icon {
        .v-icon {
          transition: none !important;
        }
      }
    }
  }
}

// You can remove below style
// Upgrade Banner
.app-navigation-menu {
  .upgrade-banner {
    position: absolute;
    bottom: 13px;
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>

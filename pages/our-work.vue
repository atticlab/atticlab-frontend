<template>
  <div class="our-work">
    <!-- begin main -->
    <div class="our-work__main">
      <b-container fluid="lg">
        <BigBackgroundText
          :options="{
            content: 'Our work',
            color: 'white',
            position: 'right',
            fontSize: '6em',
          }"
          class="our-work-background-text"
        />
        <!-- begin list -->
        <div class="our-work-list">
          <div
            v-for="(project, index) in projects"
            :key="`${project.name}${index}`"
            class="our-work-item"
          >
            <img
              :src="project.image"
              :alt="`${project.name} logotype`"
              class="our-work-image"
            />
            <div class="our-work-description">
              <a
                :href="project.website || project.repository"
                :alt="project.name"
                target="_blank"
                rel="nofollow noopener"
                class="our-work__link"
              >
                <p class="our-work__title">{{ project.name }}</p>
                <p v-if="project.description" class="our-work__paragraph">
                  {{ project.description }}
                </p>
                <p class="our-work__date">{{ project.date }}</p>
              </a>
            </div>
          </div>
        </div>
        <!-- end list -->
      </b-container>
    </div>
    <!-- end main -->
  </div>
</template>

<script>
/*eslint-disable*/
const BigBackgroundText = () =>
  import(
    /* webpackChunkName: "BigBackgroundText" */ '~/components/BigBackgroundText.vue'
  )
import { animation } from '~/services/animation.service'
import debounce from 'lodash/debounce'

export default {
  name: 'OurWork',
  head() {
    return {
      title: 'Our work',
      meta: [
        {
          hid: 'Atticlab',
          name: 'Atticlab',
          content: 'Our work page',
        },
      ],
    }
  },
  components: {
    BigBackgroundText,
  },
  data() {
    return {
      debounce,
      projects: [
        {
          name: 'Harp bridge',
          image: `${require('~/assets/images/harp-harmony-polkadot-bridge.jpg')}`,
          description: 'A bidirectional bridge between Harmony and Polkadot (Edgeware).',
          status: 'in progress',
          repository: 'https://github.com/everstake/harmony_bridge_backend ',
        },
        {
          name: 'Terra Wormhole bridge',
          image: `${require('~/assets/images/wormhole-terra-solana-bridge.jpg')}`,
          description: 'Terra-Solana-Ethereum Wormhole bridge which allows fast and decentralized crowss-chains transfers.',
          status: 'in progress',
          repository: 'https://github.com/everstake/wormhole',
        },
        {
          name: 'Everstake',
          image: `${require('~/assets/images/everstake.png')}`,
          description:
            'Your Social Staking Platform. Everstake helps institutional investors and regular token holders to profit off their crypto assets. We operate in a wide range of Proof of Stake blockchains, providing our customers with numerous options to choose from. Pick the most promising projects, delegate with Everstake and make 5%-20% annually.',
          date: 'JAN 13, 2019',
          website: 'https://everstake.one',
        },
        {
          name: 'Teztracker',
          image: `${require('~/assets/images/teztracker.jpg')}`,
          description:
            'TezTracker is an open-source Tezos explorer based on the Conseil indexer. Teztracker provides a standard block explorer set of features along with some unique functionality when it comes to statistics and NFT’s.',
          repository: 'https://github.com/everstake/teztracker',
        },
        {
          name: 'Cosmoscan',
          image: `${require('~/assets/images/cosmoscan.jpg')}`,
          website: 'https://cosmoscan.net/ ',
          description:
            'Cosmoscan is the first data and statistics explorer for the Cosmos network. It provides information oт the overall network operations, governance details, validators and much more. This is still an MVP, so if you have any suggestions, please reach out.',
          repository: 'https://github.com/everstake/cosmoscan-api',
        },
        {
          name: 'Oasismonitor',
          image: `${require('~/assets/images/oasismonitor.jpg')}`,
          website: 'https://oasismonitor.com/ ',
          description:
            'A robust and full blockchain explorer and API for the Oasis network. Provides the most extensive information on transactions, validators and overall network stats.',
          repository: 'https://github.com/everstake/oasis-explorer',
        },
        {
          name: 'Substrate VSCode plugin',
          image: `${require('~/assets/images/vscode-plugin.jpg')}`,
          description:
            'This plugin provides a convenient development environment for the Parity Substrate framework for the VSCode users.',
          repository: 'https://github.com/everstake/vscode-plugin-substrate',
        },
        {
          name: 'Substrate Atom plugin',
          image: `${require('~/assets/images/atom-plugin.jpg')}`,
          description:
            'The plugin provides a convenient development environment for the Parity Substrate framework for the VSCode users.\n',
          repository: 'https://github.com/everstake/atom-plugin-substrate',
        },
        {
          name: 'NEO IDE',
          image: `${require('~/assets/images/neo-ide.jpg')}`,
          description: `Create contracts for the Neo blockchain without the need to set up the environment and download packages for developers, just open Neo IDE in your browser and start creating the future.`,
          repository: 'https://github.com/everstake/neo-ide',
          website: 'http://neo-ide.com',
        },
        {
          name: 'IOST IDE',
          image: `${require('~/assets/images/iost-ide.jpg')}`,
          description:
            'Online IDE for the IOST chain, comes with a set of standard IDE features.',
          website: 'https://iost-ide.everstake.one/',
          repository: 'https://github.com/everstake/iost-ide',
        },
        {
          name: 'OpenBankIT',
          image: 'https://atticlab.net/img/openbank.png',
          description: 'OpenbankIT is an open-source banking platform for managing e-money that uses blockchain technology. We have developed a complete stack of technologies for banking industry, whose purpose is to eliminate technological barriers between financial institutions. Transparency and reliability of the platform are guaranteed by crypto technologies. Platform is under active development due to constant requests from our clients.',
          date: 'JANUARY 19, 2017',
          website: 'https://openbankit.com/',
        },
        {
          name: 'NATIONAL CRYPTOCURRNECY',
          image: 'https://atticlab.net/img/nat-crypto.png',
          description: 'A green-field development project implemented jointly with Deloitte under auspices of the National Bank of Ukraine, which is in progress and is subject to the NDA.',
          date: 'DECEMBER 3, 2016',
        },
        {
          name: 'Smart money',
          image: 'https://atticlab.net/img/smartmoney.png',
          description: 'SmartMoney is a new generation electronic money system. Clever money that will protect the interests of its owner. The concept that bitcoin brought to us has turned the minds and understanding of many skeptics. In practice, I proved that the values can be transmitted over the Internet.',
          date: 'OCTOBER 5, 2016',
          repository: 'https://github.com/everstake/harmony_bridge_backend ',
        },
      ],
    }
  },
  methods: {
    handleBigTextAnimation(nodeInViewport, { target }) {
      if (nodeInViewport) {
        animation({
          targets: target,
          translateY: [-50, 0],
          opacity: 1,
          duration: 1500,
          delay: 300,
          complete() {
            if (!nodeInViewport) {
              target.style.opacity = 0
            }
          },
        })
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.our-work {
  &__main {
    padding: 35px 0;
    background-color: #f9f9f9;
  }

  &__container {
    font-size: 16px;
    max-width: 800px;
    padding-left: 180px;
    margin-left: auto;
  }

  &-item {
    position: relative;
    height: 600px;
    padding: 35px 0;

    @media (max-width: 960px) {
      text-align: center;
      min-height: auto;
      height: auto;
    }

    &:first-child {
      padding-top: 0;
    }

    &:last-child {
      padding-bottom: 0;
    }
  }

  &-image {
    position: absolute;
    top: 50px;
    right: 50px;
    max-width: 700px;

    @media (max-width: 960px) {
      position: static;
      width: 100%;
      height: auto;
    }
  }

  &-description {
    position: absolute;
    left: 50px;
    bottom: 50px;
    width: 100%;
    max-width: 700px;
    padding: 50px 60px 30px;
    background-color: #fff;
    box-shadow: 0 2px 24px 6px rgba(197, 197, 197, 0.2);

    @media (max-width: 960px) {
      position: static;
      padding: 15px;
      text-align: left;
      margin-left: auto;
      margin-right: auto;
    }
  }

  &__title {
    color: #555;
    font-size: 22px;
    font-weight: 700;
    margin-bottom: 20px;
    text-transform: uppercase;
  }

  &__paragraph {
    color: #555;
    font-size: 14px;
    font-weight: 400;
    margin-bottom: 40px;
  }

  &__date {
    color: #b8b8b8;
    font-size: 14px;
    font-weight: 700;
    text-transform: uppercase;
  }

  &-background-text {
    @media (max-width: 960px) {
      text-align: center !important;
    }
  }

  &__link:hover {
    text-decoration: none;
  }
}
</style>

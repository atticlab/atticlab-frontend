<template>
  <div class="ownership">
    <!-- begin ownership -->
    <div class="ownership__main">
      <b-container fluid="lg">
        <div class="ownership__container">
          <b-row>
            <b-col cols="12" lg="8">
              <h1 class="page__title ownership__title">
                ATTIC LAB - OWNERSHIP
              </h1>
              <p class="page__subtitle">
                In the very beginning we developed blockchain solutions for
                banks and other financial institutions in collaboration with
                Ambisafe, Alliance Bank and Humaniq. Now our diverse and
                experienced team allows us to focus on building own blockchain
                applications. Our recent projects include cryptocurrency
                exchange Cryptagio and open-source banking software openbankIT.
              </p>
              <p class="page__subtitle">
                Mission of Attic Lab is to create a compliant and decentralized
                financial system that benefits all its participants. As part of
                our strategy we support open-source blockchain initiatives and
                share our expertise with blockchain community by delivering
                lectures and workshops.
              </p>
            </b-col>
            <b-col cols="12" lg="4">
              <div class="contacts">
                <p class="contacts__name">Attic Fintech</p>
                <p class="contacts__title">Address:</p>
                <p class="contacts__para mb0">181B, Jerusalem Alley, Warsaw,</p>
                <p class="contacts__para">Post - 02-222, Warsaw, Poland</p>
                <p class="contacts__para"><b>KRS:</b> 0000681126</p>
                <p class="contacts__para"><b>NIP:</b> 7010697756</p>
                <p class="contacts__para">
                  Tel: <a href="tel:+48223906482">+48 22 390 64 82</a>
                </p>
                <p class="contacts__title">President</p>
                <p class="contacts__para">Sergii Vasylchuk</p>
                <p class="contacts__title">Owners</p>
                <p class="contacts__para">100% - Sergii Vasylchuk</p>
              </div>
            </b-col>
          </b-row>
          <b-row class="ownership__section">
            <b-col cols="12" lg="8">
              <h2 class="ownership__title owner__name">Sergii Vasylchuk</h2>
              <div class="owner__description">
                <p class="owner__para">
                  A former software engineer with knowledge in finance, now
                  Sergii is CEO at Attic Lab. He has 15 years of experience in
                  development.
                </p>
                <p class="owner__para">
                  A wide range of technology-related skills allow him to
                  coordinate the technological part of the project, delve into
                  details, monitor the quality at each stage of the project
                  development.
                </p>
                <p class="owner__para">
                  His technical skills include knowledge of Go, NodeJS, C++,
                  PHP, Python and various NoSQL and SQL databases. In addition
                  Sergii has 8 years of management experience in forming and
                  coordinating project-oriented and motivated teams.
                </p>
              </div>
            </b-col>
            <b-col cols="12" lg="4">
              <div class="owner">
                <img
                  class="owner__picture"
                  src="../assets/images/owner.jpg"
                  alt="Sergii Vasylchuk"
                />
              </div>
            </b-col>
          </b-row>
        </div>
      </b-container>
    </div>
    <!-- begin social networks -->
    <div class="socials">
      <p class="socials__title">LET'S WORK TOGETHER</p>
      <p class="socials__subtitle">We are open to collaborate</p>
      <SocialNetworks mode="text" class="socials__networks" />
    </div>
    <!-- end social networks -->
  </div>
</template>

<script>
import SocialNetworks from '../components/SocialNetworks'
export default {
  name: 'Ownership',
  components: { SocialNetworks },
}
</script>

<style lang="scss" scoped>
.ownership {
  &__main {
    padding: 70px 0;
    background-color: #f9f9f9;
  }

  &__team {
    padding: 35px 0;
  }

  &__title {
    font-size: 45px;
    font-weight: 900;
    margin-bottom: 35px;

    @media (max-width: 768px) {
      font-size: 28px;
    }
  }

  &__container {
    font-size: 16px;
  }

  &-background-text {
    animation: rotate 4s ease-in-out alternate infinite;

    @media (max-width: 960px) {
      text-align: center !important;
    }
  }

  &__form {
    max-width: 600px;

    @media (max-width: 960px) {
      margin: 35px auto auto;
    }
  }

  &__button {
    padding: 8px 50px;
    color: #fff;
    font-size: 15px;
  }
}

.ownership__section {
  display: flex;
  margin-top: 70px;
}
</style>

<style lang="scss" scoped>
.contacts {
  margin-top: 35px;
}

.contacts__name {
  color: #555;
  font-size: 16px;
  font-weight: 600;
}

.contacts__title {
  margin-bottom: 0;
  color: #555;
  font-size: 16px;
  font-weight: 600;
}

.contacts__para {
  font-size: 16px;
  font-weight: 400;
  color: #555;
}
</style>

<style lang="scss" scoped>
.owner {
  margin-top: 35px;

  @media (max-width: 420px) {
    text-align: center;
  }
}

.owner__description {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.owner__name {
  margin-bottom: 0;
  text-transform: uppercase;
  color: #555;
}

.owner__para {
  font-size: 19px;
  font-weight: 300;
}

.owner__picture {
  max-height: 400px;
}
</style>

<style lang="scss" scoped>
.socials {
  padding: 35px 0;
  text-align: center;
}

.socials__title {
  font-size: 38px;
  font-weight: 700;
  text-transform: uppercase;
  color: #555;
}
</style>

<style lang="scss">
.socials__networks {
  & .socials__link {
    display: inline-block;
    margin: 5px;
    background: transparent;
    color: #00ead4;
    border: 1px solid #00ead4;
    padding: 8px 20px;

    &:hover {
      text-decoration: none;
    }
  }
}
</style>

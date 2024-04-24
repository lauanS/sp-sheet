<template>
  <div class="home-page">
    <div class="home-primary-side">
      <div class="home-title">
        <h1>
          SP <br>
          <span>SHEET</span>
        </h1>
      </div>

      <div class="home-actions">
        <ImportCharacterButton class="main-button" @onload="navigateToSheetPage" />
        <button class="main-button">Utilizar personagens de demonstração</button>
      </div>
    </div>

    <div class="home-secondary-side">
      <h2>Gerencie os status do seu <br><mark>personagem de RPG</mark></h2>
      <p class="sheet-purpose-summary">Saiba facilmente o valor e a origem de cada modificador</p>
      <p class="sheet-purpose-feat">Pare de perder tempo somando os modificadores toda hora</p>
      <p class="sheet-purpose-feat">Deixe de esquecer de osmar inspiração</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Character } from '@/types';
import { useRouter } from 'vue-router';
import ImportCharacterButton from '@/components/ImportCharacterButton.vue';

const router = useRouter();

function navigateToSheetPage(character: Character) {
  localStorage.setItem('character', JSON.stringify(character));
  router.push({ path: '/sheet' });
}
</script>

<style scoped lang="scss">
.home-page {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  height: calc(100vh - 100px);

  .home-primary-side {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    height: 100%;
    width: 40%;

    .home-title {
      width: 60%;

      text-align: center;

      h1 {
        margin: 10px auto;

        color: #ffd859;
        font-size: 150px;
        font-family: "Big Shoulders Display";
        line-height: 150px;

        text-shadow:
          -5px 5px 0px #068891ce,
          -10px 8px 0px #0b4c59ce;
      }

      span {
        font-family: "Anton";
        font-size: 118px;
        letter-spacing: 8px;

        text-shadow: -5px 5px 0 #0b4c59ce;
      }
    }

    .home-actions {
      width: 60%;
      display: flex;
      flex-direction: column;

      margin-top: 50px;

      > div {
        margin-bottom: 25px;
      }
    }
  }

  .home-secondary-side {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;

    box-sizing: border-box;
    padding-left: 5%;
    
    height: 100%;
    width: 60%;

    h2, p, mark {
      font-family: 'Montserrat';
      text-transform: uppercase;
    }

    h2 {
      font-size: 28px;
      margin-bottom: 10px;
    }

    mark {
      background-color: unset;
      color: #ffe89b;
      text-shadow: 
      0 0 4px #948b09,
      0 0 8px #948b09,
      0 0 12px #948b09,
    }

    .sheet-purpose-summary {
      font-size: 18px;
      font-weight: bold;

      margin: 10px 0;
    }

    .sheet-purpose-feat {
      font-size: 16px;
      margin: 5px 0;
    }
  }

  .main-button {
    width: 100%;
    
    box-sizing: border-box;
    border-radius: 60px;
    padding: 15px 15px;
    background-color: #ffd859;

    color: white;
    font-size: 22px;
    font-weight: bold;
    text-align: center;
    text-transform: uppercase;
    text-shadow: 1px 1px 0 #000000ce;

    cursor: pointer;
  }

  @media (max-width: 1024px) {
    height: 100%;

    .home-primary-side {
      height: fit-content;
      width: 100%;

      .home-title {
        width: 100%;

        h1 {
          font-size: 120px;
          line-height: 120px;
        }

        span {
          font-size: 90px;
        }
      }
    }

    .home-secondary-side {
      margin-top: 80px;
      margin-bottom: 20px;

      height: fit-content;
      width: 100%;

      h2 {
        font-size: 16px;
      }

      .sheet-purpose-summary {
        font-size: 14px;
      }

      .sheet-purpose-feat {
        font-size: 12px;
      }
    }

    .main-button {
      font-size: 16px;
    }
  }
}
</style>

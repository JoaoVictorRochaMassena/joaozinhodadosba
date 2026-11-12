<script>
import Accordion from "./components/Accordion.vue";
import Pagination from "./components/Pagination.vue";
import ProgressBar from "./components/ProgressBar.vue";
import Tabs from "./components/Tabs.vue";
import Dropdown from "./components/Dropdown.vue";
import Toast from "./components/Toast.vue";
export default {
  components: { Accordion, Pagination, ProgressBar, Tabs, Dropdown, Toast },
  data() {
    return {
      search: "",
      category: "Todas",
      page: 1,
      progress: 0,
      message: "",
      timer: null,
      categories: ["Todas", "Programação", "Revisão"],
      items: [
        { name: "Diretivas", category: "Programação" },
        { name: "Componentes", category: "Programação" },
        { name: "Eventos", category: "Programação" },
        { name: "Banco de dados", category: "Revisão" },
        { name: "Redes", category: "Revisão" },
        { name: "Engenharia de software", category: "Revisão" },
      ],
      faq: [
        {
          title: "Como estudar?",
          content: "Leia o conteúdo e faça um exercício.",
        },
        {
          title: "Como revisar?",
          content: "Separe as dúvidas e refaça os exemplos.",
        },
      ],
      tabs: [
        {
          title: "Hoje",
          content: "Estudar componentes e resolver exercícios.",
        },
        { title: "Amanhã", content: "Revisar props e praticar eventos." },
      ],
    };
  },
  computed: {
    filtered() {
      return this.items.filter(
        (i) =>
          (this.category === "Todas" || i.category === this.category) &&
          i.name.toLowerCase().includes(this.search.toLowerCase()),
      );
    },
    pages() {
      return Math.max(1, Math.ceil(this.filtered.length / 2));
    },
    visible() {
      return this.filtered.slice((this.page - 1) * 2, this.page * 2);
    },
  },
  mounted() {
    try {
      this.progress = Math.min(
        100,
        Math.max(0, Number(localStorage.getItem("vueProgress")) || 0),
      );
    } catch {}
  },
  beforeUnmount() {
    clearTimeout(this.timer);
  },
  methods: {
    select(value) {
      this.category = value;
      this.page = 1;
    },
    close() {
      clearTimeout(this.timer);
      this.message = "";
    },
    save() {
      this.close();
      try {
        localStorage.setItem("vueProgress", this.progress);
        this.message = "Progresso salvo neste navegador.";
      } catch {
        this.message = "Não foi possível salvar neste navegador.";
      }
      this.timer = setTimeout(() => (this.message = ""), 3500);
    },
  },
};
</script>
<template>
  <main>
    <a href="/">Início</a>
    <h1>Meus estudos - Vue.js</h1>
    <section>
      <h2>Dúvidas</h2>
      <Accordion :items="faq" />
    </section>
    <section>
      <h2>Matérias</h2>
      <label>Pesquisar <input v-model="search" @input="page = 1" /></label
      ><Dropdown :options="categories" @select="select" />
      <p>Filtro: {{ category }}</p>
      <ul>
        <li v-for="item in visible" :key="item.name">
          {{ item.name }} — {{ item.category }}
        </li>
      </ul>
      <p v-if="!filtered.length">Nenhuma matéria encontrada.</p>
      <Pagination :total="pages" :current="page" @change="page = $event" />
    </section>
    <section>
      <h2>Progresso de leitura</h2>
      <label
        >Páginas lidas
        <input
          type="range"
          min="0"
          max="100"
          v-model.number="progress" /></label
      ><ProgressBar :value="progress" />
    </section>
    <section>
      <h2>Planejamento</h2>
      <Tabs :items="tabs" />
    </section>
    <button @click="save">Salvar progresso</button
    ><Toast :message="message" @close="close" />
  </main>
</template>

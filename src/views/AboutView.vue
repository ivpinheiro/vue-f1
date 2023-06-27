<template>
  <div class="about-people">
    <h1>About People</h1>
    <div class="people-list">
      <div v-for="person in people" :key="person.id" class="person-card">
        <img :src="person.image" :alt="person.name" class="person-image">
        <h2 class="person-name">{{ person.name }}</h2>
        <p class="person-description">{{ person.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      people: [
        {
          id: 1,
          name: "John Doe",
          image: "john-doe.jpg",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
          id: 2,
          name: "Jane Smith",
          image: "jane-smith.jpg",
          description: "Nulla accumsan lacus sed nisi dignissim elementum.",
        },
        // Add more people here
      ],
    };
  },
};
</script>

<style scoped>
.about-people {
  color: #198754;
  text-align: center;
  /* Add additional styles as needed */
}

.people-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}

.person-card {
  width: 300px;
  padding: 20px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.person-image {
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 50%;
  margin: 0 auto 20px;
}

.person-name {
  font-size: 18px;
  margin-bottom: 10px;
}

.person-description {
  font-size: 14px;
}
</style>
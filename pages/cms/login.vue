<template>
    <div>

    </div>
</template>

<script setup>
import { storeToRefs } from 'pinia'; // import storeToRefs helper hook from pinia
import { useAuthStore } from '~/store/AuthStore'; // import the auth store we just created

const { authenticateUser } = useAuthStore(); // use authenticateUser action from  auth store

const { authenticated } = storeToRefs(useAuthStore()); // make authenticated state reactive with storeToRefs

const user = ref({
  username: null, 
  password: null,
});
const router = useRouter();

const login = async () => {
  if(user.username && user.password){
    await authenticateUser(user.value);
    if (authenticated) {
        router.push('./index');
    }
  }
  return false
};

</script>
import { defineStore } from 'pinia';
import axios from 'axios'; 

export const useAuthStore = defineStore({
  id: 'auth',
  state: () => ({
    isAuthenticated: false,
    user: null,
    apiLogin: 'api/auth/login',
    apiLogout: 'api/auth/logout'


  }),
  actions: {
    async login({ username, password }) {
      if (!username || !password) {
        return;
      }
      try {
        const response = await axios.post(`${this.apiLogin}`, {
          username: username,
          password: password,
        });

        console.log(response);
        const token = response.data.token;
        localStorage.setItem('token', token);
        this.user = { username: username }; 
        this.isAuthenticated = true;
        console.log('Login avvenuto con successo.', this.user.username);
      } catch (error) {
        console.log('Errore durante il login:', error.response.data);
        this.isAuthenticated = false;
        
      } finally {
        this.user = username;
        console.log('questo è finaly');
      }
    },
    async logout() {
        try {
          const token = localStorage.getItem('token');
          await axios.post(this.apiLogout, {}, {
            headers: {
              'Authorization': `Bearer ${token}`
            }
          });
          localStorage.removeItem('token');
          console.log('Logout con successo');
          this.isAuthenticated = false;
          this.user = null;
        } catch (error) {
          console.error("Errore durante il logout:", error);
        }
      }
  },
});




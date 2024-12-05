export const API_URL = 'http://localhost:8080/api/users';
export const username = 'admin';
export const password = 'password';

export const authHeader = `Basic ${btoa(`${username}: ${password}`)}`;
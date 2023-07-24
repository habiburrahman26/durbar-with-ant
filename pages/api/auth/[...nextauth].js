import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export const authOptions = {
  //   secret: process.env.NextAuth_SECRET,
  session: {
    jwt: true,
  },
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        const res = await fetch(
          'https://book-catalog-backend-orcin.vercel.app/api/v1/auth/login',
          {
            method: 'POST',
            body: JSON.stringify({
              email: credentials.email,
              password: credentials.password,
            }),
            headers: {
              'Content-Type': 'application/json',
            },
          }
        );
        const data = await res.json();

        let token = data.data.accessToken;

        if (data.data.accessToken) {
          return {
            token: 'puki',
            email: credentials.email,
            name: token,
          };
        }

        return null;
      },
    }),
  ],
};

export default NextAuth(authOptions);

import React, { useState } from 'react';

const AuthPage = () => {
  const [isSignup, setIsSignup] = useState(false); // Basculer entre Connexion et Inscription
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState(''); // Utilisé uniquement pour l'inscription
  const [confirmPassword, setConfirmPassword] = useState(''); // Utilisé uniquement pour l'inscription

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignup) {
      // Logique d'inscription
      if (password !== confirmPassword) {
        alert('Les mots de passe ne correspondent pas !');
        return;
      }
      console.log('Inscription réussie :', { username, email, password });
      alert('Compte créé avec succès !');
    } else {
      // Logique de connexion
      console.log('Connexion réussie :', { email, password });
      alert('Connexion réussie !');
    }

    // Réinitialiser les champs
    setEmail('');
    setPassword('');
    setUsername('');
    setConfirmPassword('');
  };

  return (
    <div style={{ maxWidth: '400px', margin: '50px auto', padding: '20px', border: '1px solid #ddd', borderRadius: '5px' }}>
      <h2>{isSignup ? "Créer un Compte" : "Se Connecter"}</h2>
      <form onSubmit={handleSubmit}>
        {isSignup && (
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="username" style={{ display: 'block', marginBottom: '5px' }}>Nom d'utilisateur :</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Entrez votre nom d'utilisateur"
              required={isSignup}
              style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '5px' }}
            />
          </div>
        )}
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="email" style={{ display: 'block', marginBottom: '5px' }}>Email :</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Entrez votre email"
            required
            style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '5px' }}
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="password" style={{ display: 'block', marginBottom: '5px' }}>Mot de passe :</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Entrez votre mot de passe"
            required
            style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '5px' }}
          />
        </div>
        {isSignup && (
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="confirmPassword" style={{ display: 'block', marginBottom: '5px' }}>Confirmez le mot de passe :</label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirmez votre mot de passe"
              required={isSignup}
              style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '5px' }}
            />
          </div>
        )}
        <button
          type="submit"
          style={{
            backgroundColor: isSignup ? '#28a745' : '#007BFF',
            color: '#fff',
            border: 'none',
            padding: '10px 15px',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          {isSignup ? "S'inscrire" : "Se Connecter"}
        </button>
      </form>
      <p style={{ marginTop: '15px', textAlign: 'center' }}>
        {isSignup ? "Vous avez déjà un compte ?" : "Vous n'avez pas de compte ?"}{' '}
        <button
          onClick={() => setIsSignup(!isSignup)}
          style={{
            background: 'none',
            border: 'none',
            color: '#007BFF',
            textDecoration: 'underline',
            cursor: 'pointer',
            padding: 0,
          }}
        >
          {isSignup ? "Se Connecter" : "S'inscrire"}
        </button>
      </p>
    </div>
  );
};

export default AuthPage;

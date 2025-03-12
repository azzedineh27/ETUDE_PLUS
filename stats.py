import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns

# Génération de données simulées
np.random.seed(42)
niveaux = ["CP", "CE1", "CE2", "CM1", "CM2", "6e", "5e", "4e", "3e", "2nde", "1ère", "Terminale"]
matieres = ["Maths", "Français"]
data = []

for niveau in niveaux:
    for matiere in matieres:
        debut_notes = np.random.uniform(5, 15, 50)  # Notes avant tutorat
        fin_notes = debut_notes + np.random.uniform(0, 5, 50)  # Notes après tutorat
        fin_notes = np.clip(fin_notes, 0, 20)  # Assurer des notes entre 0 et 20
        for d, f in zip(debut_notes, fin_notes):
            data.append([niveau, matiere, d, f])

df = pd.DataFrame(data, columns=["Niveau", "Matière", "Note Début", "Note Fin"])

# Calcul des points gagnés
df["Points Gagnés"] = df["Note Fin"] - df["Note Début"]

# Moyenne des points gagnés par niveau et matière
moyenne_gains = df.groupby(["Niveau", "Matière"])["Points Gagnés"].mean().unstack()

# Création des graphiques
plt.figure(figsize=(12, 6))
sns.barplot(data=df, x="Niveau", y="Points Gagnés", hue="Matière", ci=None)
plt.title("Moyenne des points gagnés par niveau et matière")
plt.xlabel("Niveau scolaire")
plt.ylabel("Points Gagnés")
plt.xticks(rotation=45)
plt.legend(title="Matière")
plt.grid(axis='y', linestyle='--', alpha=0.7)
plt.show()

# Boxplot pour voir la dispersion des points gagnés
plt.figure(figsize=(12, 6))
sns.boxplot(data=df, x="Niveau", y="Points Gagnés", hue="Matière")
plt.title("Dispersion des points gagnés par niveau et matière")
plt.xlabel("Niveau scolaire")
plt.ylabel("Points Gagnés")
plt.xticks(rotation=45)
plt.legend(title="Matière")
plt.grid(axis='y', linestyle='--', alpha=0.7)
plt.show()

# Affichage des statistiques
print("Statistiques des points gagnés par niveau et matière :")
print(moyenne_gains)

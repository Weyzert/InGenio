const conectores = [
  "da",
  "de",
  "do",
  "das",
  "dos",
  "e",
];

function capitalize(palavra) {

  return (
    palavra.charAt(0).toUpperCase() +
    palavra.slice(1).toLowerCase()
  );

}

export function formatNome(nomeCompleto) {

  if (!nomeCompleto) return "";

  const partes = nomeCompleto
    .trim()
    .split(" ")
    .filter(Boolean);

  if (partes.length === 1) {
    return capitalize(partes[0]);
  }

  const primeiroNome =
    capitalize(partes[0]);

  const ultimoNome =
    capitalize(
      partes[partes.length - 1]
    );

  const nomesDoMeio = partes
    .slice(1, -1)
    .map((parte) => {

      const lower =
        parte.toLowerCase();

      if (
        conectores.includes(lower)
      ) {
        return lower;
      }

      return (
        parte.charAt(0)
          .toUpperCase() + "."
      );
    });

  return [
    primeiroNome,
    ...nomesDoMeio,
    ultimoNome,
  ].join(" ");
}
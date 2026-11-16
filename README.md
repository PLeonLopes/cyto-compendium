# CytoML Compendium: Análise Automatizada de Cariótipos

Página que reúne, em um só lugar, os links do Trabalho de Conclusão de Curso *Uso de Visão Computacional para análise automatizada de Cariótipos e identificação de aneuploidias* (Ciência da Computação, UNIPÊ, 2026): a demonstração, o vídeo, os repositórios, os pesos dos modelos e o banner.

**Acesse:** [pleonlopes.github.io/cyto-compendium](https://pleonlopes.github.io/cyto-compendium/)

---

## Sobre o Trabalho

A partir de uma imagem de metáfase, a pipeline localiza cada cromossomo com o **YOLO26m**, identifica qual dos 24 tipos ele é (1 a 22, X e Y) com uma **ResNet-50**, monta o cariograma no formato do exame e sinaliza possíveis aneuploidias numéricas, como a trissomia do 21 (`47,XX,+21`). O resultado serve de apoio ao especialista, que continua responsável pela revisão e pela decisão diagnóstica.

---

## Recursos

| Recurso | Onde acessar |
|---|---|
| **Demonstração** | <picture><source media="(prefers-color-scheme: dark)" srcset="https://api.iconify.design/simple-icons/vercel.svg?color=%23ffffff" /><img src="https://api.iconify.design/simple-icons/vercel.svg?color=%23000000" width="16" height="16" align="top" alt="Vercel" /></picture>&nbsp;[Vercel](https://cytoml-demo.vercel.app/) &nbsp;&nbsp; <img src="https://api.iconify.design/simple-icons/render.svg?color=%2346e3b7" width="16" height="16" align="top" alt="Render" />&nbsp;[Render](https://cytoml-demo.onrender.com) (espelho, pode levar alguns segundos para iniciar) |
| **Vídeo** | <img src="https://api.iconify.design/logos/youtube-icon.svg" width="16" height="16" align="top" alt="YouTube" />&nbsp;[Demonstração em funcionamento](https://youtu.be/LX48hWcq6iU) |
| **Código** | <picture><source media="(prefers-color-scheme: dark)" srcset="https://api.iconify.design/simple-icons/github.svg?color=%23ffffff" /><img src="https://api.iconify.design/simple-icons/github.svg?color=%23181717" width="16" height="16" align="top" alt="GitHub" /></picture>&nbsp;[CytoML](https://github.com/irlvinicius/CytoML): pipeline, treinamento e avaliação<br /><picture><source media="(prefers-color-scheme: dark)" srcset="https://api.iconify.design/simple-icons/github.svg?color=%23ffffff" /><img src="https://api.iconify.design/simple-icons/github.svg?color=%23181717" width="16" height="16" align="top" alt="GitHub" /></picture>&nbsp;[cytoml-demo](https://github.com/PLeonLopes/cytoml-demo): demonstração web (API e site) |
| **Pesos dos modelos** | <img src="https://api.iconify.design/logos/hugging-face-icon.svg" width="16" height="16" align="top" alt="Hugging Face" />&nbsp;[KaryoVisio](https://huggingface.co/irlvinicius/KaryoVisio) (Hugging Face) |
| **Banner** | <img src="https://api.iconify.design/simple-icons/canva.svg?color=%2300c4cc" width="16" height="16" align="top" alt="Canva" />&nbsp;[Banner de apresentação](https://canva.link/xlwyg6ds4nbv80q) (Canva) |

---

## Estrutura

```
cyto-compendium/
├── index.html      # Página única: autores, orientador e links
├── style.css       # Estilos, com tema claro e escuro
├── js/             # Tema, animação de entrada e ano do rodapé
└── assets/         # Fotos dos autores
```

Site estático (HTML, CSS e JavaScript, sem dependências), publicado pelo GitHub Pages a partir da branch `main`.

---

## Autores

<div align="center">
  <table>
    <tr>
      <td align="center">
        <a href="https://github.com/PLeonLopes">
          <img src="https://github.com/PLeonLopes.png" width="100px;" alt="Pedro Lopes"/><br />
          <sub><b>Pedro Nícollas Pereira Leon Lopes</b></sub>
        </a>
      </td>
      <td align="center">
        <a href="https://github.com/irlvinicius">
          <img src="https://github.com/irlvinicius.png" width="100px;" alt="Vinícius Vieira"/><br />
          <sub><b>Vinícius Vieira de Lima</b></sub>
        </a>
      </td>
    </tr>
  </table>
</div>

<p align="center">
  <sub>UNIPÊ, Centro Universitário de João Pessoa</sub><br />
  <sub>Orientador: Prof. Maelso Bruno Pacheco Nunes Pereira</sub>
</p>

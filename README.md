# Rubel Pearl — Site Institucional

Site estático em **HTML5 + CSS3 puro**, sem frameworks, sem dependências JS externas (apenas Google Fonts via CDN para tipografia).

## Estrutura

```
rubelpearl/
├── index.html                    # Home (hero, categorias, planos, sobre, diferenciais, depoimentos, newsletter)
├── planos.html                   # Página completa de planos + revenda
├── sobre.html                    # História, o que é IPTV, benefícios, diferenciais
├── contato.html                  # Formulário e dados de atendimento
├── politica-privacidade.html
├── termos.html
├── robots.txt
├── sitemap.xml
├── css/
│   └── style.css                 # Design system completo (variáveis, dark luxury, dourado)
├── js/
│   └── main.js                   # Header scroll, menu mobile, reveal on scroll, forms demo
└── img/
    ├── hero.jpg                  # Banner principal
    ├── cat-canais.jpg
    ├── cat-filmes.jpg
    ├── cat-series.jpg
    └── cat-multidispositivos.jpg
```

## Como publicar

Basta enviar a pasta `rubelpearl/` para qualquer hospedagem estática:

- **cPanel / hospedagem tradicional**: envie todos os arquivos para `public_html/`
- **Netlify / Vercel / Cloudflare Pages**: arraste a pasta no painel
- **GitHub Pages**: subir num repositório e ativar Pages
- **Servidor próprio (Nginx/Apache)**: copiar para o diretório raiz do domínio

Não há build. Não há dependências instaláveis. Abra `index.html` no navegador para preview local.

## Identidade visual

- **Paleta**: Preto `#000000`, Branco `#ffffff`, Dourado suave `#C9A86A`, Neutros claros.
- **Tipografia**: Cormorant Garamond (títulos) + Inter (corpo).
- **Tom**: luxo, sofisticação, minimalismo premium.

## SEO

- Meta title e description únicos por página
- Open Graph + Twitter Card
- JSON-LD: Organization, WebSite e BreadcrumbList
- URLs amigáveis
- Hierarquia H1/H2/H3 correta
- Alt em todas as imagens
- sitemap.xml + robots.txt
- Canonical em todas as páginas

## Performance

- Sem frameworks JS
- CSS único e enxuto (~12 KB)
- Imagens com `loading="lazy"` exceto LCP
- Fontes com `preconnect`
- Mobile First

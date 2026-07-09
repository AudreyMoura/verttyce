document.addEventListener('DOMContentLoaded', () => {
    // Base de dados de conteúdo por segmento
    const sectorData = {
        'hospitalidade': {
            title: 'Hospitalidade',
            icon: 'src/icon_hospitalidade.png',
            description: 'Garantimos uma experiência impecável de recepção, camaria e suporte operacional para hotéis, pousadas, flats e condomínios de alto padrão.',
            features: [
                'Higienização rigorosa seguindo padrões hoteleiros',
                'Profissionais de atendimento bilíngue ou treinados para recepção',
                'Flexibilidade de escala conforme sazonalidade de ocupação',
                'Supervisão dedicada em tempo integral'
            ]
        },
        'food-service': {
            title: 'Food Service',
            icon: 'src/icon_food.png',
            description: 'Soluções integradas de copa, cozinha, higienização de utensílios e organização de salão para restaurantes corporativos, redes e eventos.',
            features: [
                'Mão de obra adaptada às normas da ANVISA',
                'Profissionais de apoio rápidos para horários de pico',
                'Treinamento focado em desperdício zero e agilidade',
                'Reposição imediata de pessoal operacional'
            ]
        },
        'construcao-civil': {
            title: 'Construção Civil',
            icon: 'src/icon_construcao.png',
            description: 'Fornecimento de equipes qualificadas e em total conformidade jurídica para dar tração e suporte à engenharia pesada e obras civis.',
            features: [
                'Rigidez total no uso de EPIs e conformidade com NR-18',
                'Limpeza pós-obra técnica e entrega de chaves',
                'Apoio em carga, descarga e logística de insumos',
                'Mitigação de riscos trabalhistas com documentação unificada'
            ]
        },
        'industria': {
            title: 'Indústria',
            icon: 'src/icon_industria.png',
            description: 'Suporte à linha de produção, embalagem, controle de qualidade e serviços pesados para manter a planta industrial operando em máxima eficiência.',
            features: [
                'Equipes treinadas para ambientes de manufatura crítica',
                'Foco total em produtividade e redução de gargalos',
                'Alinhamento com as normas ISO e diretrizes internas',
                'Gestão integrada de turnos (24/7 se necessário)'
            ]
        },
        'logistica': {
            title: 'Logística',
            icon: 'src/icon_logistica.png',
            description: 'Profissionais dedicados a operações de e-commerce, centros de distribuição e transportadoras, otimizando o fluxo de armazenagem e expedição.',
            features: [
                'Agilidade em processos de Picking e Packing',
                'Operadores de empilhadeira e paleteiras certificados',
                'Preparação de equipes para picos sazonais (Black Friday/Natal)',
                'Acuracidade no manuseio e movimentação de inventários'
            ]
        },
        'facilities': {
            title: 'Facilities',
            icon: 'src/icon_facilities.png',
            description: 'Gestão completa da infraestrutura física do seu negócio, cobrindo conservação predial, portaria, zeladoria e suporte corporativo de alto nível.',
            features: [
                'Limpeza empresarial técnica e conservação programada',
                'Controle de acesso rigoroso e recepção executiva',
                'Manutenção preventiva predial básica',
                'Uso de insumos industriais com selo de eficiência ecológica'
            ]
        }
    };

    const modal = document.getElementById('services-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalIcon = document.getElementById('modal-icon');
    const modalDesc = document.getElementById('modal-description');
    const modalList = document.getElementById('modal-list');
    const closeBtn = document.querySelector('.modal__close');
    const overlay = document.querySelector('.modal__overlay');
    const cards = document.querySelectorAll('.service-card');

    // Abre o modal injetando as informações certas
    function openModal(sectorKey) {
        const data = sectorData[sectorKey];
        if (!data) return;

        modalTitle.textContent = data.title;
        modalIcon.src = data.icon;
        modalIcon.alt = `Ícone ${data.title}`;
        modalDesc.textContent = data.description;

        // Limpa e reconstrói a lista de tópicos de entrega
        modalList.innerHTML = '';
        data.features.forEach(feat => {
            const li = document.createElement('li');
            li.textContent = feat;
            modalList.appendChild(li);
        });

        modal.classList.add('modal--open');
        modal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden'; // Bloqueia scroll de fundo
    }

    // Fecha o modal de forma limpa
    function closeModal() {
        modal.classList.remove('modal--open');
        modal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = ''; // Libera o scroll de fundo
    }

    // Eventos
    cards.forEach(card => {
        card.addEventListener('click', () => {
            const sector = card.getAttribute('data-sector');
            openModal(sector);
        });
    });

    closeBtn.addEventListener('click', closeModal);
    overlay.addEventListener('click', closeModal);

    // Fecha ao pressionar ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('modal--open')) {
            closeModal();
        }
    });

    
});
import { test, expect } from '@playwright/test';

const MEU_RM   = '251405'
const BASE_URL = 'https://prova.carvalho.cc';

test('submissão completa da prova', async ({ browser }) => {
  const context = await browser.newContext({
    extraHTTPHeaders: { 'x-exam-student-id': MEU_RM },
  });
  const page = await context.newPage();

  await page.goto(BASE_URL);

  // Dry-run banner should NOT appear
  await expect(page.locator('#dry-run-banner')).not.toBeVisible();

  // escreva o teste a partir daqui
  await page.getByLabel("Número de Matrícula").fill("251405");
  await page.getByLabel("Nome Completo").fill("Victor Picciutti dos Santos");
  await page.getByLabel("URL do Repositório").fill("https://github.com/Victor-Picciutti/ProvaDS.git");
  await page.getByText("Iniciar Prova").click()

  await expect(page.getByRole('heading', { name: "Qual é o propósito do beforeEach em uma suite de testes Vitest?" }))
  await page.getByRole('radio', { name: "Executa uma função de configuração antes de cada caso de teste individualmente" }).click();
  await page.getByText("Próxima").click()

  await expect(page.getByRole('heading', { name: "Qual é o caso de uso correto para o useEffect" }))
  await page.getByRole('radio', { name: "Executar um efeito colateral (ex: buscar dados, configurar uma inscrição) após a renderização" }).click();
  await page.getByText("Próxima").click()

  await expect(page.getByRole('heading', { name: "De acordo com a pirâmide de testes, qual camada deve ter o maior número de testes?" }))
  await page.getByRole('radio', { name: "Testes unitários" }).click();
  await page.getByText("Próxima").click()

  await expect(page.getByRole('heading', { name: "Qual erro comum causa um loop infinito com o useEffect?" }))
  await page.getByRole('radio', { name: "Incluir na lista de dependências um valor que é reatribuído dentro do próprio efeito" }).click();
  await page.getByText("Próxima").click()

  await expect(page.getByRole('heading', { name: "Qual característica descreve melhor um teste unitário?" }))
  await page.getByRole('radio', { name: "Testa um único trecho de lógica de forma isolada, sem dependências externas" }).click();
  await page.getByText("Próxima").click()

  await expect(page.getByRole('heading', { name: "Qual tipo de teste verifica se dois ou mais componentes funcionam corretamente em conjunto?" }))
  await page.getByRole('radio', { name: "Teste de integração" }).click();
  await page.getByText("Próxima").click()

  await expect(page.getByRole('heading', { name: "Qual das opções a seguir é um code smell que viola os princípios do Clean Code?" }))
  await page.getByRole('radio', { name: "Uma função que valida os dados de entrada, salva no banco de dados e envia um e-mail" }).click();
  await page.getByText("Próxima").click()

  await expect(page.getByRole('heading', { name: "O que o useState retorna?" }))
  await page.getByRole('radio', { name: "Uma tupla com o valor atual do estado e uma função de atualização" }).click();
  await page.getByText("Próxima").click()

  await expect(page.getByRole('heading', { name: "Qual é a principal vantagem de uma arquitetura de microsserviços em relação a um monólito?" }))
  await page.getByRole('radio', { name: "Os serviços podem ser implantados, escalados e desenvolvidos de forma independente" }).click();
  await page.getByText("Próxima").click()

  await expect(page.getByRole('heading', { name: "O que a cobertura de testes mede?" }))
  await page.getByRole('radio', { name: "A porcentagem do código de produção executada pela suite de testes" }).click();
  await page.getByText("Próxima").click()

  await expect(page.getByRole('heading', { name: "O princípio KISS aplicado ao código de testes significa:" }))
  await page.getByRole('radio', { name: "Os testes devem ser simples e legíveis — evite complexidade desnecessária" }).click();
  await page.getByText("Próxima").click()

  await expect(page.getByRole('heading', { name: "Uma suite de testes é melhor descrita como:" }))
  await page.getByRole('radio', { name: "Um conjunto de casos de teste agrupados em torno de uma funcionalidade ou preocupação" }).click();
  await page.getByText("Próxima").click()

  await expect(page.getByRole('heading', { name: "Por que os testes end-to-end ficam no topo (parte estreita) da pirâmide de testes?" }))
  await page.getByRole('radio', { name: "Porque são os mais caros de escrever, executar e manter" }).click();
  await page.getByText("Próxima").click()

  await expect(page.getByRole('heading', { name: "O que o princípio DRY determina?" }))
  await page.getByRole('radio', { name: "Don't Repeat Yourself — evite duplicar conhecimento ou lógica" }).click();
  await page.getByText("Próxima").click()

  await expect(page.getByRole('heading', { name: "Ao escrever um teste unitário para uma função que envia um e-mail de confirmação, por que você deve usar um mock para o serviço de e-mail?" }))
  await page.getByRole('radio', { name: "Para manter o teste rápido e determinístico, sem depender de um serviço externo" }).click();
  await page.getByText("Próxima").click()

  await expect(page.getByRole('heading', { name: "O que o vi.fn() permite verificar após a execução de um teste?" }))
  await page.getByRole('radio', { name: "Quantas vezes a função foi chamada e com quais argumentos" }).click();
  await page.getByText("Enviar").click()
  await expect(page.getByRole('heading', { name: 'Prova enviada!' })).toBeVisible();
});
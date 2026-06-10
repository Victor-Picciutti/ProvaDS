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

  




  

  // Confirmar envio
  // Remover o comentário quando terminar de escrever o código
  // await expect(page.getByRole('heading', { name: 'Prova enviada!' })).toBeVisible();
});
## Expires: Define a data e a hora de expiração do cookie. Se esse parâmetro não for definido, será configurado por default como um cookie de sessão, expirando quando o navegador for fechado.

## Max-Age: Similar ao Expires, ele também define quando um cookie vai expirar, mas em segundos.

## Domain: Define para qual host o cookie será enviado pelo navegador. Se esse parâmetro não for definido, o cookie será enviado somente para o host da URL atual, será enviado nas requisições para example.com e todos os seus sub-domínios.

## Path: Indica qual o caminho deve existir na URL para que o cookie seja enviado pelo navegador. Se o valor for /docs, o cookie será enviado para URLs como /docs, /docs/, /docs/web, mas não será enviado para URLs como /, /documentos, /pt-br/docs.

## Secure: Se esse parâmetro for definido, o cookie só será enviado em requisições HTTPS.

## HttpOnly: Proíbe o acesso ao cookie em questão através do JavaScript com document.cookie. Eles são enviados só para o servidor, ex: cookies que persistem sessões de servidor não precisam estar disponíveis para o JavaScript, e portanto a diretiva HttpOnly deve ser configurada.

## SameSite: Com os possíveis valores sendo Strict, Lax e None, controla se o cookie pode ser enviado em requisições feitas a partir de outros sites para o domínio do cookie.

## Strict: Apenas cookies para o endereço da URL que está sendo acessada são enviados. Faz com que a requisição inicial para uma aplicação não contenha os cookies com este parâmetro, já que estão vindo de outro domínio.

## Lax (opção padrão): Semelhante ao Strict, mas permite o envio dos cookies na requisição inicial. Isso permite que, por exemplo, o usuário mantenha a sessão ativa ao chegar no sistema através de um link externo.

## None: Significa que os cookies serão enviados mesmo se a requisição estiver vindo de outro endereço. Para usar este método, as versões mais recentes dos navegadores exigem que o parâmetro secure seja definido.

## SessionStorage: É similar ao localStorage, a única diferença é que enquanto os dados armazenados no localStorage não expiram, os dados na sessionStorage têm seus dados limpos ao expirar a sessão da página. A sessão da página dura enquanto o navegador está aberto e se mantém no recarregamento da página. Funciona na política de mesma origem, portanto os dados armazenados só estarão disponíveis na mesma origem. Por fim, os dados não serão enviados de volta ao servidor para cada solicitação HTTP (HTML, imagens, JavaScript, CSS, etc.), reduzindo a quantidade de tráfego entre o cliente e o servidor.

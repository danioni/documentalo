# L2 · Libro de afirmaciones — narrativa congelada

| Campo | Valor |
|---|---|
| Fecha | 2026-09-06 |
| Rama | `l2-narrativa` |
| Piezas | `app/page.tsx` (+ `app/layout.tsx`), `content/docs/index.mdx`, `content/docs/coordinalo/productos.mdx`, `content/docs/servicialo/index.mdx` |
| Regla | Cada afirmación factual (versión, cifra, ruta, estado, fecha, nombre de cabecera) tiene una fila. Una afirmación sin fila no entra al texto. |

## Fuentes y notación

| Clave | Fuente |
|---|---|
| `V:Pn Lx` | `docs/verdad-2026-09.md`, pregunta `n`, línea `x` (commit `2598069`). `V:A Lx` es el Anexo A (inventario de rutas). |
| `manifest:x` | `servicialo/mcp-server@main`, `protocol/manifest.yaml`, línea `x`, leído por `raw.githubusercontent.com` el 2026-09-06 |
| `PROTOCOL:x` | ídem, `PROTOCOL.md` |
| `HTTP_PROFILE:x` | ídem, `spec/HTTP_PROFILE.md` |
| `CHANGELOG:x` | ídem, `CHANGELOG.md` |
| `anuncio:x` | ídem, `docs/announcements/2026-08-rfc-005-window.md` |
| `README-H:x` | `habilitalo/protocolo@main`, `README.md`, línea `x`, leído el 2026-09-06 |
| `sonda` | Peticiones en vivo el 2026-09-06 desde este entorno: `GET https://coordinalo.com/api/servicialo/manifest` (200), `GET https://coordinalo.com/api/servicialo/franco/services` (200, sin credencial), `GET https://coordinalo.com/api/servicialo/franco/sessions/abc` sin cabecera (401, `{"error":"API key requerida (X-Org-Api-Key)"}`), `GET https://registry.npmjs.org/@servicialo%2Fmcp-server` (`latest: 0.9.14`, `time.modified: 2026-08-23T21:33:36Z`), `gh repo view habilitalo/protocolo` (`licenseInfo: null`), `raw …/habilitalo/protocolo/main/LICENSE` (404), `HEAD https://github.com/servicialo/mcp-server/tree/main/rfcs` (404) |
| `repo` | Archivos de este repositorio |
| `encargo` | Marco narrativo y decisiones vigentes del encargo L2 (no es dato técnico; se lista para que la frase sea rastreable) |
| `INFERENCIA` | Conclusión directa de una fuente citada, no una lectura literal; se marca para que se pueda discutir |

Conteo de filas `SIN FUENTE`: **0**. Filas marcadas `INFERENCIA`: **4** (se listan al final).

## 1. Home — `app/page.tsx` y `app/layout.tsx`

| Afirmación | Archivo y línea | Fuente |
|---|---|---|
| Coordinalo se integra por REST y por MCP | `app/page.tsx:5`, `app/layout.tsx:17` | `V:P2 L39`, `V:P2 L81` |
| Servicialo es un estándar propuesto (protocolo en borrador) | `app/page.tsx:5`, `:54-55` | `manifest:20-21` (`version: "0.10"`, `status: draft`); `encargo` |
| Habilitalo es un protocolo de conectores | `app/page.tsx:5`, `:66` | `README-H:7` |
| Los tres son de Grupo Digitalo | `app/page.tsx:5`, `:252`, `:451` | `V:P5 L129,L139` (todos los hosts en el mismo team de Vercel `danionis-projects`); `PROTOCOL:94` (manifiesto de Grupo Digitalo); `encargo`. `INFERENCIA` |
| Coordinalo: producto, en producción | `app/page.tsx:42-43` | `V:P5 L129` (`coordinalo.com` bindeado al proyecto `coordinalo`); `manifest:271` (`status: live`) |
| Coordinalo: sistema SaaS para organizaciones que entregan servicios profesionales | `app/page.tsx:45-46` | `encargo` (marco); `sonda` (OpenAPI de Coordinalo, `servers[0].description`) |
| Coordinalo incluye tres productos activables: Coordinalo (operación), Planificalo (finanzas), Relacionalo (clientes) | `app/page.tsx:45-46` | `V:P12 L229`, `L236` (`enum ProductKey`) |
| Un tercero se integra por REST Servicialo, por organización, y por MCP | `app/page.tsx:45-46` | `V:P2 L39`, `L81` |
| Servicialo: licencia Apache-2.0 | `app/page.tsx:57-58` | `manifest:27`; `HTTP_PROFILE:11` |
| HTTP Profile 1.0.0 | `app/page.tsx:57-58` | `HTTP_PROFILE:7`; `V:P18 L328` |
| RFC-001 (el proceso) no está ratificado | `app/page.tsx:57-58` | `V:P20 L353` |
| Una implementación registrada: Coordinalo | `app/page.tsx:57-58`, `:82` | `manifest:266-274`; `V L438` |
| Habilitalo: licencia MIT declarada en su README | `app/page.tsx:67` | `README-H:10`, `:153`, `:209`. No hay archivo `LICENSE` en el repo (`sonda`) |
| Habilitalo: manifiesto JSON declara la fuente; función pura convierte datos crudos en eventos canónicos | `app/page.tsx:69-70` | `README-H:34-38`, `:55`, `:79-84`, `:151`, `:155` |
| Habilitalo: sirve para traer el historial desde otras fuentes | `app/page.tsx:69-70` | `README-H:7-8`, `:81` |
| Habilitalo: documentación propia pendiente | `app/page.tsx:70` | `encargo` (L4) |
| 113 tools en el servidor MCP de Coordinalo | `app/page.tsx:79` | `V:P21 L365`, `L405` |
| 40 tools definidos por el protocolo | `app/page.tsx:80` | `V:P18 L337`; `manifest:126-165` |
| 6 operaciones mínimas del HTTP Profile | `app/page.tsx:81` | `V:P18 L334`; `HTTP_PROFILE:224-235` |
| Base REST `https://coordinalo.com/api/servicialo/{orgSlug}/…` | `app/page.tsx:88`, `:137`, `:145` | `V L39`; `V:P2 L90` |
| Descubrimiento (`services`, `availability`, `manifest`) sin credencial si la organización está publicada | `app/page.tsx:89-90`, `:105`, `:136` | `V:P2 L88`; `V:A L1271`, `L1276`, `L1278`; `sonda` (200 sin cabecera) |
| Ciclo de vida (`sessions/{id}` y transiciones) con `X-Org-Api-Key` o `Authorization: Bearer` y key `sk_admin_…` | `app/page.tsx:89-90`, `:106`, `:144-146` | `V:P3 L94`, `L101`; `V:A L1279-1290`; `sonda` (401 nombra `X-Org-Api-Key`) |
| MCP en `https://coordinalo.com/api/mcp`, Streamable HTTP | `app/page.tsx:95-96`, `:108` | `V L39`; `V:P2 L89` |
| En `/api/mcp` la key va en `X-Org-Api-Key`; `Authorization: Bearer` es el JWT de sesión | `app/page.tsx:97-98`, `:108` | `V:P3 L94` |
| La key la emite un owner o admin y se muestra completa una sola vez | `app/page.tsx:106` | `V:P3 L94`, `L100` |
| OpenAPI en `/api/servicialo/openapi.json`; manifest en `/api/servicialo/manifest` | `app/page.tsx:107` | `V:P2 L87`; `sonda` |
| Sin OAuth para el MCP | `app/page.tsx:109` | `V:P4 L108` |
| Sin webhooks salientes | `app/page.tsx:109` | `V:P15 L264` |
| Guías existentes: multi-tenancy con Prisma, MercadoPago en Chile, portal del cliente, roles y permisos | `app/page.tsx:116` | `repo` `content/docs/guias/meta.json` |
| Integraciones existentes: Resend, Google Calendar | `app/page.tsx:126` | `repo` `content/docs/integraciones/meta.json` |
| Ejemplo `curl` y forma de la respuesta (`organization.slug`, `services[].id/name/duration_minutes/price/currency`) | `app/page.tsx:136-146` | `sonda` (respuesta real de `GET …/franco/services`); `V:A L1278` |
| "Describe lo que corre"; lo que es intención se dice con estado y fecha | `app/page.tsx:243`, `:252`, `:451` | `encargo` (decisiones vigentes) |
| Planificalo y Relacionalo no tienen API pública propia; sus rutas son internas | `app/page.tsx:322` | `V:P2 L81`; `V L437` |
| No existe el prefijo `/api/v1/` | `app/page.tsx:322` | `V:P2 L85` |
| Guías e integraciones: solo páginas que existen y no están retiradas | `app/page.tsx:414` | `repo` `meta.json` de `guias` e `integraciones` (commit `2598069` retiró `webhooks` y `whatsapp-evolution` del menú) |
| Título y descripción del sitio (metadatos) | `app/page.tsx:8-22`, `app/layout.tsx:14`, `:17` | Mismas fuentes que la descripción (`V:P2 L39`, `manifest:20-21`, `README-H:7`) |

## 2. Índice de docs — `content/docs/index.mdx`

| Afirmación | Archivo y línea | Fuente |
|---|---|---|
| El sitio documenta lo que corre; lo que es intención se dice con estado y fecha | `index.mdx:6` | `encargo` |
| Productos de Grupo Digitalo | `index.mdx:6`, `:65` | `V:P5 L139`; `encargo`. `INFERENCIA` |
| Coordinalo: producto SaaS en producción | `index.mdx:10` | `V:P5 L129`; `manifest:271` |
| Tres productos activables: Coordinalo (operación), Planificalo (finanzas), Relacionalo (clientes) | `index.mdx:10` | `V:P12 L229`, `L236` |
| Una organización nueva nace con Coordinalo activo y los otros dos disponibles | `index.mdx:10` | `V:P12 L229`, `L233` |
| La activación es una transición única; no hay pausa ni downgrade | `index.mdx:10` | `V:P12 L229`, `L234` |
| Las dos vías viven en `coordinalo.com` | `index.mdx:12` | `V L39`; `V:P5 L129` |
| No existe el prefijo `/api/v1/` | `index.mdx:12` | `V:P2 L85` |
| Planificalo y Relacionalo no tienen API pública; rutas internas con sesión | `index.mdx:12` | `V:P2 L81`; `V L437` |
| Fila REST: base, descubrimiento sin credencial si está publicada, ciclo de vida con `X-Org-Api-Key` / `Authorization: Bearer sk_admin_…` | `index.mdx:16` | `V L39`; `V:P2 L88`; `V:P3 L94`, `L101`; `V:A L1271-1290`; `sonda` |
| Fila MCP: `https://coordinalo.com/api/mcp`, Streamable HTTP, key en `X-Org-Api-Key`, `Bearer` es el JWT de sesión | `index.mdx:17` | `V L39`; `V:P2 L89`; `V:P3 L94` |
| Recomendación: usar `X-Org-Api-Key` en ambas vías | `index.mdx:19` | Decisión de Franco en la revisión del PR #3 (2026-09-06); consistente con `V:P3 L94` (las dos vías aceptan `X-Org-Api-Key`) |
| La API key la emite un owner o admin; se muestra completa una sola vez | `index.mdx:21` | `V:P3 L94`, `L100` |
| No hay OAuth para el MCP ni webhooks salientes | `index.mdx:21` | `V:P4 L108`; `V:P15 L264` |
| Planificalo: ventas, cobros, nóminas y reportes | `index.mdx:26` | `V L606`, `L625`, `L642`, `L597` (rutas `planificalo/*`) |
| Relacionalo: clientes, audiencias, campañas y comunicaciones | `index.mdx:27` | `V L649`, `L659`, `L667`, `L674` |
| Servicialo: estándar abierto propuesto, Apache-2.0 | `index.mdx:32` | `manifest:20-21`, `:27`; `encargo` |
| Protocolo 0.10 en borrador; HTTP Profile 1.0.0 | `index.mdx:32` | `manifest:20-21`; `HTTP_PROFILE:7-10` |
| RFC-001 sin ratificar | `index.mdx:32` | `V:P20 L353` |
| RFC-005 en período final de comentarios hasta el 2026-09-13 | `index.mdx:32` | `V:P20 L353`; `anuncio:24` |
| Una implementación registrada: Coordinalo | `index.mdx:32` | `manifest:266-274` |
| Especificación en `https://servicialo.com/spec`, en inglés | `index.mdx:36` | `manifest:24`; `PROTOCOL:1755` |
| El repositorio contiene protocolo, manifest, HTTP Profile y servidor MCP del protocolo | `index.mdx:37` | `manifest:22`, `:26`, `:106`, `:112` |
| Habilitalo: manifiesto JSON (fuente y tipos de evento), función pura, eventos canónicos, historial desde otras fuentes | `index.mdx:42` | `README-H:7-8`, `:34-38`, `:55`, `:79-84` |
| Habilitalo: su README declara licencia MIT | `index.mdx:42` | `README-H:10`, `:153`, `:209` |
| Habilitalo: documentación propia pendiente en este sitio | `index.mdx:42` | `encargo` (L4) |
| Repositorio `github.com/habilitalo/protocolo` | `index.mdx:45` | `README-H:12`; `V L17` |
| Recursos: solo páginas existentes y no retiradas | `index.mdx:50-59` | `repo` `content/docs/guias/meta.json`, `content/docs/integraciones/meta.json` |
| Multi-tenancy con Prisma: patrón de aislamiento por organización | `index.mdx:53` | `V L537` (el patrón coincide con el código real) |
| MercadoPago en Chile: guía genérica | `index.mdx:54` | `V L542` |
| Portal del cliente: acceso por token en `coordinalo.com/clientes/{token}` | `index.mdx:55` | `V:P14 L253` |
| Roles y permisos: roles de organización | `index.mdx:56` | `V:P13 L241` (la página existe; su contenido es L5) |
| Resend: proveedor de email activo | `index.mdx:57` | `V:P8 L175` |
| Google Calendar: sincronización bidireccional | `index.mdx:58` | `V:P10 L198` |

## 3. Productos y activación — `content/docs/coordinalo/productos.mdx`

| Afirmación | Archivo y línea | Fuente |
|---|---|---|
| `enum ProductKey { coordinalo, planificalo, relacionalo }`; una fila por producto en `organization_products`; estado `active` o `available` | `productos.mdx:6` | `V:P12 L236-237` |
| Cada organización activa los productos por separado | `productos.mdx:6` | `V:P12 L229` |
| Dominios: operación / finanzas / clientes | `productos.mdx:10-12` | `V:P2 L81`, `L86` (prefijos `coordinalo`, `planificalo`, `relacionalo`); rutas en `V L456-476`, `L597-642`, `L649-674` |
| Estado inicial: Coordinalo `active`; Planificalo y Relacionalo `available` | `productos.mdx:10-12`, `:17` | `V:P12 L229`, `L233`, `L234` |
| Gating activo en producción desde el 2026-07-13 con `PRODUCT_GATING_ENABLED=true` | `productos.mdx:16` | `V:P12 L229`, `L233` |
| Con el flag encendido decide `organization_products`; apagado, todo activo (fail-open) | `productos.mdx:16` | `V:P12 L229` |
| `initializeOrganizationProducts` siembra `modular_default` | `productos.mdx:17` | `V:P12 L229`, `L234` |
| Orgs anteriores quedaron all-active por backfill del 2026-07-12 | `productos.mdx:17` | `V:P12 L233` |
| Transición única `available → active` vía `activateProduct`; sin pausa ni downgrade | `productos.mdx:18` | `V:P12 L229`, `L234` |
| Orígenes: `settings-ui`, `activation-landing`, `contextual-nudge`, `mcp`, `admin` | `productos.mdx:19` | `V:P12 L229`, `L234` |
| Teaser "Más capacidades" → `/capacidades`; landings de anzuelo; nudges contextuales | `productos.mdx:20` | `V:P12 L229` |
| Umbrales en `contextual-triggers.ts`: Planificalo si hay cobros; Relacionalo con ≥ 20 clientes (`RELACIONALO_CLIENTS_THRESHOLD = 20`) | `productos.mdx:24-29` | `V:P12 L234` |
| `anzuelo-hosts.ts` mapea `relacionalo.com`/`www.` → `relacionalo` y `planificalo.com`/`www.` → `planificalo`, con overrides `NEXT_PUBLIC_ANZUELO_{RELACIONALO,PLANIFICALO}_HOST` | `productos.mdx:33` | `V:P12 L229`, `L235`; `V:P5 L136` |
| El proxy reescribe la raíz a `/anzuelo/{producto}` | `productos.mdx:33` | `V:P12 L229`; `V:P5 L136` (`proxy.ts:194-197`) |
| Las rutas de interfaz viven bajo `src/app/[orgSlug]` | `productos.mdx:37` | `V L497` (`find src/app/[orgSlug] -name page.tsx`); `V:P22 L420-424` |
| Las rutas de API de la tabla son internas: sesión y membresía | `productos.mdx:37` | `V:P1 L53`; `V:P2 L81` |
| La integración de terceros va por REST Servicialo y MCP | `productos.mdx:37` | `V L39` |
| Coordinalo incluye agenda y calendario, sesiones, disponibilidad y bloqueos, Google Calendar, agendas públicas, disputas | `productos.mdx:41` | `V L456` (sessions), `L465` (availability, calendar-blocks), `V:P10 L198-212` (Google Calendar), `L471` y `V:A L980-986` (agendas), `L682` y `V:A L997-1000` (disputes) |
| Rutas UI `/[org]/coordinalo/agenda`, `/[org]/coordinalo/calendar`, `/[org]/coordinalo/sessions` | `productos.mdx:41` | `V L497`; `V:P22 L420` |
| Prefijo `/api/organizations/{orgSlug}/coordinalo/*` | `productos.mdx:41` | `V:A L978-1013` |
| Planificalo incluye ventas, cobros y pagos, pagos a proveedores y reparto, nóminas, P&L, flujo de caja, cierres, boletas DTE | `productos.mdx:42` | `V L642` (sales), `L597` (charges), `L633` (payments), `L621`/`L633` (revenue-sharing, pagos-proveedores), `L625` (payroll), `L606` (pnl, cash-flow), `L608` (cierres), `V:P6 L153-156` (DTE) |
| MercadoPago: integración disponible (sin más) | `productos.mdx:42` | `V:P9 L187`; `encargo` |
| OpenFactura como proveedor DTE: integración disponible | `productos.mdx:42` | `V:P6 L149`, `L153` |
| `/[org]/planificalo/ventas` es sección gateada por producto | `productos.mdx:42` | `V:P22 L424` (`planificalo/(gated)/ventas/page.tsx`) |
| `/[org]/settings/facturacion-electronica` | `productos.mdx:42` | `V:P6 L156` |
| `/api/organizations/{orgSlug}/planificalo/*`: 91 rutas | `productos.mdx:42` | `V:P2 L81` |
| Relacionalo incluye fichas e historial, audiencias, campañas, envío de WhatsApp (Twilio), registros de comunicación | `productos.mdx:43` | `V L667` (clients, history), `L649` (audiences), `L659` (campaigns), `V:P7 L170` (send-whatsapp), `L674` (communication logs), `V:P7 L163` (Twilio) |
| `/[org]/relacionalo/clientes` | `productos.mdx:43`, `:48` | `V:P22 L423` |
| `/api/organizations/{orgSlug}/relacionalo/*`: 24 rutas; `…/communication/*` | `productos.mdx:43` | `V:P2 L81`; `V L674` |
| `/[org]/dashboard` existe | `productos.mdx:47` | `V L497`; `V:P22 L422` |
| Carve-outs core en `product-registry.ts`: `/relacionalo/clientes`, `/planificalo/catalogo`, `/mi-*` | `productos.mdx:48` | `V:P12 L234` |
| Portal del proveedor: grupo de rutas `(provider)`, `/mi-*` | `productos.mdx:48` | `V:P13 L246` |
| Catálogo en `/[org]/planificalo/catalogo`, detalle `/[org]/planificalo/services/{id}`, proveedor `/[org]/planificalo/providers/{id}` | `productos.mdx:48` | `V L497` |
| Los carve-outs se ven con el producto dueño en `available` | `productos.mdx:48` | `V:P12 L234` ("carve-outs core"). `INFERENCIA` (es el significado de carve-out core en el registro) |
| Booking público en `/explorar/{orgSlug}` sobre `/api/public/**` | `productos.mdx:49` | `V:P22 L421`; `V L688`; `V:P1 L57`; `V:A L1245-1260` |
| Portal del cliente en `/clientes/{token}` sobre `/api/clientes/{token}/**` | `productos.mdx:50` | `V:P14 L253`, `L257`; `V:P1 L55` |
| Los tres productos operan sobre la misma base de datos | `productos.mdx:54` | `V L27` (un solo proyecto Supabase de producción); `V L21` (`packages/database` compartido); `V:P1 L72`. `INFERENCIA` |
| El ciclo financiero vive en `Cobro`, no en `Session`; `invoiced/paid/closed` retirados por el principio 7 de Servicialo | `productos.mdx:54` | `V:P11 L220` |
| Eventos internos con namespaces `servicialo.*`, `coordinalo.*`, `planificalo.*`; no se exponen a terceros | `productos.mdx:54` | `V:P15 L272` |
| No hay webhooks salientes | `productos.mdx:54` | `V:P15 L264` |

## 4. Servicialo — `content/docs/servicialo/index.mdx`

| Afirmación | Archivo y línea | Fuente |
|---|---|---|
| Protocolo 0.10, borrador | `servicialo/index.mdx:7`, `:51` | `manifest:20-21` |
| HTTP Profile 1.0.0 | `:8`, `:52` | `HTTP_PROFILE:7` |
| Apache-2.0 | `:9`, `:17` | `manifest:27`; `HTTP_PROFILE:11` |
| 1 implementación | `:10`, `:83` | `manifest:266-274` |
| Texto normativo en inglés, en `servicialo.com/spec` y en el repo | `:13` | `manifest:24`, `:26`; `PROTOCOL:1755` |
| Qué define: servicio, estados desde que se pide hasta que se documenta y cobra, operaciones mínimas | `:17` | `PROTOCOL:62-64`, `:203`, `:354`; `HTTP_PROFILE:224-226` |
| Es una especificación, no un producto | `:17` | `PROTOCOL:73`, `:91-92` |
| Grupo Digitalo la publica | `:17`, `:140` | `PROTOCOL:94`; `V:P5 L139`. `INFERENCIA` |
| Motivación: cada plataforma construye su propio modelo; servicios aislados e invisibles para agentes | `:19` | `PROTOCOL:71-73` |
| Ocho dimensiones de un servicio | `:19` | `PROTOCOL:203`; `V:P18 L335` |
| Seis estados obligatorios y tres financieros opcionales | `:19`, `:77` | `PROTOCOL:356`, `:370`, `:385`; `manifest:190-191` |
| Bindings: HTTP normativo, MCP de referencia, A2A experimental | `:19`, `:55` | `manifest:103-120` |
| Una implementación solo HTTP es conforme sin MCP | `:19` | `manifest:98-101`; `PROTOCOL:1729` |
| Cada transición registra actor, método y fecha | `:23` | `PROTOCOL:118` |
| Parámetro `actor` con `type`, `id`, `on_behalf_of`; tipos `client`, `provider`, `organization`, `agent` | `:23` | `PROTOCOL:1507-1525` |
| `mandate_id` obligatorio si `actor.type` es `agent`; agencia delegada en §10 | `:23` | `PROTOCOL:1523`; `:724` |
| El protocolo no asume quién inicia una acción | `:23` | `PROTOCOL:1525` (actor humano u organización) y `:1523` (agente): cualquiera de los cuatro tipos puede iniciar. `INFERENCIA` |
| Ejemplo JSON del actor | `:25-37` | `PROTOCOL:1509-1520` (copia literal) |
| Tres niveles de acceso: 0 Resolver, 1 Discovery, 2 Authenticated, con sus credenciales y tools | `:41-45` | `PROTOCOL:125-135` |
| Protocolo publicado el 2026-05-20, enmendado el 2026-08-01 | `:51` | `CHANGELOG:12`, `:16` |
| HTTP Profile: borrador, fechado 2026-08-01, binding normativo | `:52` | `HTTP_PROFILE:7-10`; `manifest:105` |
| Perfiles: discovery/coordination/delivery estables; evidence candidato; ordering/settlement/network experimentales | `:53` | `manifest:88-95`; `V:P18 L332` |
| 40 tools (15 públicos, 25 autenticados) | `:54`, `:103` | `manifest:126-140` (públicos), `:141-165` (autenticados); `V:P18 L337` |
| 9 operaciones especificadas y no implementadas (`service_orders.*`, `mandates.*`) | `:54` | `manifest:170-179`; `V:P18 L337` |
| MCP: paquete `@servicialo/mcp-server` 0.9.14 | `:55`, `:99` | `manifest:112-113`; `V:P19 L345-346`; `sonda` (npm) |
| A2A: experimental, versión 0.3 | `:55`, `:88` | `manifest:116-118` |
| RFC-001 sin ratificar, PR #13 abierto desde el 2026-05-18 | `:56`, `:134` | `V:P20 L353` |
| RFC-005: ventana desde 2026-08-23, comentarios hasta 2026-09-06, FCP 2026-09-06 → 2026-09-13, Minor, sede PR #21 | `:57`, `:134` | `anuncio:20-25`; `V:P20 L353`, `L357` |
| RFC-005: objetivo v1.0 | `:57` | `V:P20 L353` |
| Certificación: revisión manual (2026-06); la suite automática no existe, está en el roadmap | `:58` | `manifest:274`; `PROTOCOL:1739`, `:1743`; `V:P18 L335` |
| §3.1: seis endpoints mínimos; ciclo descubrir → entender → comprometer → gestionar → verificar → cerrar | `:62` | `HTTP_PROFILE:224-226` |
| Base path `/servicialo/v1/` | `:62`, `:66-71` | `HTTP_PROFILE:49-54` |
| Tabla de las 6 operaciones (tool y endpoint) | `:66-71` | `HTTP_PROFILE:228-235` |
| Los demás endpoints son opcionales | `:73` | `HTTP_PROFILE:237-239` |
| Las rutas de Coordinalo no usan ese base path; van bajo `/api/servicialo/{orgSlug}/…` | `:73`, `:87` | `V:P2 L90`; `V:A L1267-1294` (ninguna ruta `/servicialo/v1`); `sonda` (OpenAPI de Coordinalo) |
| Ciclo canónico `requested → … → documented`, opcional `invoiced → collected → verified` | `:77` | `PROTOCOL:373`, `:385-391`; `manifest:188-191`; `V:P11 L225` |
| Los seis primeros son obligatorios y estrictamente ordenados | `:77` | `PROTOCOL:370`, `:401` |
| Los financieros pueden ir en la sesión o gestionarse aparte | `:77` | `PROTOCOL:356`, `:393` |
| Estado opcional `pending_confirmation` entre `requested` y `scheduled` | `:77` | `PROTOCOL:395-397` |
| Estados de excepción del manifest: `cancelled`, `disputed`, `reassigning`, `rescheduling`, `partial` | `:79` | `manifest:192` |
| Seis flujos de excepción (§7) y la variante de conflicto de recurso | `:79` | `PROTOCOL:457-517`, `:515` |
| Coordinalo en el manifest: `status: live`, `since: 2026-03-31`, conformidad "CORE — manual review (2026-06)" | `:83` | `manifest:266-274` |
| Manifest público de Coordinalo: `servicialo_version: "0.9"`, `implementation_version: "1.6.0"` | `:85` | `V:P2 L87`; `sonda` |
| Divergencia `delivered`/`charged` en `reference_implementation_divergence` | `:86` | `manifest:193-201`; `V:P20 L360` |
| PR #23: plan de migración; legacy, deprecar en v1.0, retirar en v1.2; "Plan only. Nothing here is implemented, scheduled, or announced"; nada deprecado hoy | `:86`, `:134` | `V:P20 L353`, `L359` |
| Descubrimiento (`services`, `availability`, `manifest`) sin credencial, gate de publicación y rate limit | `:87` | `V:P2 L88`; `V:A L1271`, `L1276`, `L1278`; `sonda` |
| `POST …/book` sin credencial, con rate limit | `:87` | `V:A L1272` |
| Ciclo de vida: `GET …/sessions/{sessionId}` y `POST …/sessions/{sessionId}/{confirm,start,deliver,complete,cancel,reschedule}` con API key | `:87` | `V:P2 L90`; `V:A L1279-1290` |
| Cabeceras `X-Org-Api-Key` o `Authorization: Bearer sk_admin_…` | `:87`, `:102`, `:127` | `V:P3 L94`, `L101`; `sonda` (401) |
| OpenAPI y manifest de la implementación | `:87` | `V:P2 L87` |
| A2A: `POST …/{orgSlug}/a2a`, JSON-RPC 2.0 `message/send`, A2A 0.3; agent card en `…/{orgSlug}/.well-known/agent.json` | `:88` | `V:P21 L365`, `L408`; `V:P4 L117` |
| Coordinalo no valida mandatos en el límite del tool MCP; el acceso lo controla la API key | `:89` | `PROTOCOL:1741` |
| Coordinalo no emite `X-Servicialo-Version` | `:90` | `V:P18 L328`, `L336` |
| Nombres `com.servicialo/mcp-server` y `com.coordinalo/mcp-server` | `:98` | `V:P19 L341`, `L345`, `L348` |
| `@servicialo/mcp-server` 0.9.14 publicado el 2026-08-23 | `:99` | `V:P19 L346`; `sonda` (npm) |
| Coordinalo MCP 4.1.x: `server.json` 4.1.1, código 4.1.0 | `:99` | `V:P19 L348` |
| URLs `https://servicialo.com/api/mcp` y `https://coordinalo.com/api/mcp` | `:100`, `:127` | `manifest:115`; `V:P19 L345`; `V:P2 L89` |
| Transportes: stdio y Streamable HTTP (protocolo); Streamable HTTP (Coordinalo) | `:101`, `:127` | `manifest:114`; `V L39` |
| Credencial del servidor del protocolo: `SERVICIALO_API_KEY` + `SERVICIALO_ORG_ID` | `:102`, `:117-118` | `PROTOCOL:135`; `V L715` |
| 113 tools de Coordinalo; 7 con vocabulario del protocolo 0.9 (lista); 7 públicos sin key; 5 solo con `X-Bootstrap-Key` | `:103`, `:127` | `V:P21 L365`, `L401`, `L399`, `L393` |
| Repositorio de docs del MCP de Coordinalo: `danioni/coordinalo-mcp` | `:104` | `V:P19 L348`; `sonda` (`gh repo view`, público) |
| Configuración `npx -y @servicialo/mcp-server` con `SERVICIALO_API_KEY`/`SERVICIALO_ORG_ID` | `:110-123` | `V L715` (coincide con `server.json`); `PROTOCOL:1529` |
| Documentación del MCP de Coordinalo pendiente en este sitio | `:127` | `encargo` (L4) |
| `spec.servicialo.com` como host alterno de la spec | `:131` | `manifest:25`; `V:P5 L139` |
| Archivos del repo: `PROTOCOL.md`, `protocol/manifest.yaml`, `spec/HTTP_PROFILE.md`, `CHANGELOG.md` | `:132-133` | `manifest:22`, `:106`; `HEAD` 200 a cada URL (2026-09-06) |
| No hay carpeta `rfcs/` en `main`; cada RFC vive en su PR | `:134` | `V:P20 L361`; `sonda` (HEAD 404) |
| Comentarios: en el PR del RFC o abriendo un issue (§17.1) | `:135` | `anuncio:5`, `:25`; `PROTOCOL:1751-1753` |
| Listado de implementaciones por PR y revisión manual (`IMPLEMENTORS.md`) | `:136` | `PROTOCOL:1743` |

## Filas marcadas `INFERENCIA`

1. "De Grupo Digitalo" / "Grupo Digitalo la publica" (home, índice, Servicialo): L0 muestra que todos los hosts viven en el mismo team de Vercel (`V:P5 L139`) y `PROTOCOL.md:94` remite al manifiesto de Grupo Digitalo; ningún documento dice literalmente "Grupo Digitalo publica Servicialo".
2. `productos.mdx:48`: los carve-outs core son visibles con el producto dueño en `available`; es el sentido de "carve-out core" en `V:P12 L234`.
3. `productos.mdx:54`: los tres productos comparten base de datos (un proyecto Supabase de producción, `packages/database` único).
4. `servicialo/index.mdx:23`: "no asume quién inicia una acción" resume que los cuatro tipos de actor pueden ejecutar tools autenticados.

## Discrepancias encontradas al verificar (no entran al texto salvo donde se indica)

| Discrepancia | Decisión en el texto |
|---|---|
| El manifest público de Coordinalo declara `authentication.header: "X-Servicialo-Key"`; el código (`require-org-api-key.ts:18-29`, `V:P3 L101`) y la respuesta 401 en vivo nombran `X-Org-Api-Key` | Se documenta `X-Org-Api-Key` (código y sonda). Registrado en el PR como duda 1 |
| `GET …/{orgSlug}/services` responde `servicialo_version: "1.0"` mientras `GET /api/servicialo/manifest` responde `"0.9"` | Se cita solo el manifest (`0.9`), que es lo que L0 auditó |
| El README de Habilitalo declara MIT (`README-H:10,153,209`) pero el repo no tiene archivo `LICENSE` y GitHub reporta `licenseInfo: null` | Se escribe "licencia MIT declarada en su README" |
| `rfcs/` no existe en `main` de `servicialo/mcp-server` (HEAD 404; `V:P20 L361`) | Se enlazan los PR #13, #21, #23 y el anuncio, y se dice que la carpeta no está en `main` |
| El manifest de Coordinalo apunta `documentation` a `https://docs.coordinalo.com/servicialo`, host que L0 no inventarió | No se enlaza |

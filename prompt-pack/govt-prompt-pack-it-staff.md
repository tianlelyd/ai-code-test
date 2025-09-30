Title: Unlocking%20ChatGPT%20for%20Government:%20A%20Prompt-Pack%20IT%20Staff

标题: 解锁政府 ChatGPT:IT 人员提示词合集

URL Source: https://academy.openai.com/public/resources/govt-prompt-pack-it-staff

来源链接: https://academy.openai.com/public/resources/govt-prompt-pack-it-staff

Published Time: 2025-07-19T01:10:42.876Z

发布时间: 2025-07-19T01:10:42.876Z

Markdown Content:

### **Why It Matters**

### **为什么重要**

Whether you safeguard a national payment gateway, secure a regional elections network, or operate a municipal open-data portal, you likely juggle legacy systems, cyber threats, tech debt, and competing budget and programmatic or mission needs and political imperatives. Generative artificial intelligence (AI) will not replace your engineering, leadership, or organizational expertise, but it can accelerate code reviews, log analysis, configuration drafting, vendor oversight—and other tasks that fill your queue.

无论您是保护国家支付网关、保障地区选举网络安全,还是运营市政开放数据门户,您都可能需要兼顾遗留系统、网络威胁、技术债务,以及相互竞争的预算、项目或任务需求与政治要求。生成式人工智能不会取代您的工程、领导力或组织专业知识,但它可以加速代码审查、日志分析、配置起草、供应商监督,以及其他填满您工作队列的任务。

### **How to Use This Pack**

### **如何使用本合集**

1.   **Replace brackets […]** with your own system names, jurisdictions, or data sources.

1.   **替换方括号 […]** 为您自己的系统名称、管辖区域或数据源。

1.   **Attach artifacts**—security scans, log files, architectural diagrams—ChatGPT should reference.

1.   **附加工件**——安全扫描、日志文件、架构图——供 ChatGPT 参考。

1.   **Specify an output style** (for example, "table," "diagram," or "plain-language summary").

1.   **指定输出样式**(例如,"表格"、"图表"或"简明语言摘要")。

1.   **Review every draft** for security, privacy, and policy compliance before sharing.

1.   **审查每个草稿**,确保在分享前符合安全、隐私和政策合规要求。

### **Simple steps for writing a good prompt**

### **编写优质提示词的简单步骤**

**1. Outline the task**Be clear about what you need ChatGPT to do.

**1. 概述任务**明确您需要 ChatGPT 做什么。

→ _Example_: _Summarize last quarter's program participation data and suggest policy or operational adjustments for the next quarter._

→ _示例_:_总结上季度的项目参与数据,并建议下季度的政策或运营调整。_

**2. Give helpful context**Add any background (or documentation) that will help.

**2. 提供有用的上下文**添加任何有助于理解的背景(或文档)。

→ _Example_: _Use data from our Q2 outreach and enrollment report submitted to the Department of Health Services._

→ _示例_:_使用我们提交给卫生服务部门的第二季度外联和登记报告中的数据。_

_**3. Describe your ideal output**_ _Tell ChatGPT how you'd like the response._

_**3. 描述您理想的输出**_ _告诉 ChatGPT 您希望如何呈现回复。_

_→ Example: Write it as a formal executive summary._

_→ 示例:将其写成正式的执行摘要。_

### **1. System Security & Vulnerability Management**

### **1. 系统安全与漏洞管理**

| **Prompt** | **Upload?** | **So What?** |
| --- | --- | --- |
| "Analyze these weekly vulnerability-scan results for the [system name] and group findings by severity and affected component. Recommend remediation steps ranked by risk reduction."<br>"分析 [系统名称] 的每周漏洞扫描结果,按严重性和受影响组件分组发现结果。推荐按风险降低程度排序的修复步骤。" | ✅ Scan report<br>✅ 扫描报告 | Prioritizes fixes for critical services within minutes.<br>在几分钟内为关键服务排定修复优先级。 |
| "Draft a one-page summary of all application-security exceptions granted last quarter and map each to the relevant control in our [cybersecurity baseline]."<br>"起草一页纸的摘要,列出上季度授予的所有应用安全例外,并将每个例外映射到我们 [网络安全基线] 中的相关控制措施。" | ✅ Exception tracker<br>✅ 例外跟踪器 | Speeds reporting to auditors and oversight boards.<br>加速向审计员和监督委员会的报告。 |
| "Extract the ten most frequent attack vectors from these intrusion-detection logs and visualise them in a bar chart for the monthly security briefing."<br>"从这些入侵检测日志中提取十个最常见的攻击向量,并以柱状图形式可视化,用于月度安全简报。" | ✅ Log files<br>✅ 日志文件 | Turns raw logs into decision-ready visuals.<br>将原始日志转化为可决策的可视化内容。 |

### **2. DevOps & Release Management**

### **2. DevOps 与发布管理**

| **Prompt** | **Upload?** | **So What?** |
| --- | --- | --- |
| "Merge these code-coverage reports from the last three builds, calculate test-coverage percentage for each module, highlight any module below 75 percent, and produce a bar chart of the results with a short narrative explaining the biggest gaps."<br>"合并最近三次构建的代码覆盖率报告,计算每个模块的测试覆盖率百分比,突出显示低于 75% 的任何模块,并生成结果柱状图,附带简短说明解释最大差距。" | ✅Coverage report files<br>✅ 覆盖率报告文件 | Reduces repetitive low level work on developers.<br>减少开发人员的重复性底层工作。 |
| "Summarize performance-test data and highlight endpoints exceeding the [value] millisecond Service Level Agreement (SLA). Present findings as a table."<br>"总结性能测试数据,并突出显示超过 [数值] 毫秒服务水平协议 (SLA) 的端点。将发现结果以表格形式呈现。" | ✅ Performance test logs<br>✅ 性能测试日志 | Pinpoints bottlenecks ahead of release.<br>在发布前定位瓶颈。 |
| "Create a change-management request template for rolling back version [ # ] of the [application]. Include impact analysis, rollback steps, and stakeholder notifications."<br>"创建用于回滚 [应用程序] 版本 [ # ] 的变更管理请求模板。包括影响分析、回滚步骤和利益相关者通知。" | ✅ Release notes or deployment plan<br>✅ 发布说明或部署计划 | Produces structured documentation required for Information Technology Infrastructure Library (ITIL) approval.<br>生成信息技术基础设施库 (ITIL) 批准所需的结构化文档。 |

### **3. Infrastructure & Cloud Operations**

### **3. 基础设施与云运营**

| **Prompt** | **Upload?** | **So What?** |
| --- | --- | --- |
| "Here are our existing IaC definitions for the standby database cluster (in YAML/JSON). Compare each resource against our [policy name] requirements—data-at-rest encryption, network isolation, tag standards—and produce a table of any non-compliant items with suggested fixes."<br>"这是我们待机数据库集群的现有 IaC 定义(YAML/JSON 格式)。将每个资源与我们的 [策略名称] 要求进行比较——静态数据加密、网络隔离、标签标准——并生成任何不合规项目的表格,附带修复建议。" | ✅ IaC files (YAML/JSON)<br>✅ IaC 文件 (YAML/JSON) | You get a compliance review in minutes, with concrete remediation steps.<br>您可以在几分钟内获得合规审查,附带具体的修复步骤。 |
| "Review these server configuration manifests and suggest security baselines aligned with widely accepted benchmarks (e.g., CIS, NIST). Present recommendations in a table with columns for config area, current setting, recommended baseline, and rationale."<br>"审查这些服务器配置清单,并建议与广泛接受的基准(例如 CIS、NIST)保持一致的安全基线。以表格形式呈现建议,包含配置区域、当前设置、推荐基线和理由等列。" | ✅ Configuration files (YAML/JSON)<br>✅ 配置文件 (YAML/JSON) | Strengthens posture without brand-specific tooling.<br>在不使用特定品牌工具的情况下增强安全态势。 |
| "Generate a weekly capacity report for virtual machines hosting the [**system name**], including CPU, memory, and storage trends. Include 30-day forecasts using historical usage. Present results as: (1) summary table of resource utilization, (2) line charts by metric, and (3) a short narrative identifying any projected constraints."<br>"为托管 [**系统名称**] 的虚拟机生成每周容量报告,包括 CPU、内存和存储趋势。使用历史使用情况包含 30 天预测。将结果呈现为:(1) 资源利用率汇总表,(2) 按指标的折线图,以及 (3) 识别任何预计约束的简短说明。" | ✅ Monitoring exports<br>✅ 监控导出 | Informs budget and scaling decisions.<br>为预算和扩展决策提供信息。 |

### **4. Data Quality, Analysis & Visualization**

### **4. 数据质量、分析与可视化**

| **Prompt** | **Upload?** | **So What?** |
| --- | --- | --- |
| "Deduplicate this dataset of [dataset name / type] by identity number and date, flagging conflicting entries for review. Provide a summary of duplicates removed."<br>"按身份编号和日期对 [数据集名称/类型] 的数据集进行去重,标记冲突条目以供审查。提供已删除重复项的摘要。" | ✅ Dataset (CSV or spreadsheet)<br>✅ 数据集 (CSV 或电子表格) | Cleans data in seconds, improving downstream analytics.<br>在几秒钟内清理数据,改善下游分析。 |
| "Create a dashboard-ready summary showing the distribution of response times in these help-desk logs, and highlight outliers beyond two standard deviations."<br>"创建可用于仪表板的摘要,显示这些帮助台日志中响应时间的分布,并突出显示超过两个标准差的异常值。" | ✅ Log export<br>✅ 日志导出 | Turns raw numbers into actionable visuals.<br>将原始数字转化为可操作的可视化内容。 |
| "Combine these three tab-delimited exports into one normalized table, add a 'last_updated' timestamp, and output the result in JavaScript Object Notation (JSON)."<br>"将这三个制表符分隔的导出合并为一个规范化表格,添加 'last_updated' 时间戳,并以 JavaScript 对象表示法 (JSON) 输出结果。" | ✅ Multiple tab-delimited files<br>✅ 多个制表符分隔文件 | Accelerates extract-transform-load (ETL) chores.<br>加速提取-转换-加载 (ETL) 任务。 |

### **5. Service Desk & End-User Support**

### **5. 服务台与最终用户支持**

| **Prompt** | **Upload?** | **So What?** |
| --- | --- | --- |
| "Generate a knowledge-base article on enrolling devices in our mobile-device-management solution, with step-by-step screenshots and plain-language instructions."<br>"生成关于在我们的移动设备管理解决方案中注册设备的知识库文章,包含逐步截图和简明语言说明。" | ✅ MDM console captures<br>✅ MDM 控制台截图 | Reduces ticket volume.<br>减少工单量。 |
| "Analyze last quarter's ticket logs and surface the top five recurring issues by department. Suggest self-service resources for each."<br>"分析上季度的工单日志,并按部门列出前五个反复出现的问题。为每个问题建议自助服务资源。" | ✅ Ticket export<br>✅ 工单导出 | Directs training and self-help investments.<br>指导培训和自助服务投资。 |
| "Draft a decision-tree for categorizing new support tickets based on keywords and priority. Present it as indented plain text."<br>"起草一个决策树,根据关键词和优先级对新支持工单进行分类。以缩进纯文本形式呈现。" | ✅ Ticket export<br>✅ 工单导出 | Improves triage consistency without additional staff.<br>在不增加人员的情况下提高分类一致性。 |

### **6. Procurement & Vendor Oversight**

### **6. 采购与供应商监督**

| **Prompt** | **Upload?** | **So What?** |
| --- | --- | --- |
| "Compare the Service Level Agreements (SLAs) in these three cloud-hosting proposals and highlight gaps against our uptime requirement."<br>"比较这三个云托管提案中的服务水平协议 (SLA),并突出显示与我们正常运行时间要求的差距。" | ✅ Proposals<br>✅ 提案 | Simplifies evaluation tables for the review committee.<br>简化审查委员会的评估表格。 |
| "Generate a draft Request for Proposal (RFP) template for a Security Information and Event Management (SIEM) platform, referencing our jurisdiction's procurement rules and minimum cybersecurity controls."<br>"生成安全信息和事件管理 (SIEM) 平台的提案请求 (RFP) 模板草稿,参考我们管辖区的采购规则和最低网络安全控制措施。" | ✅ Procurement guidelines or policy manual<br>✅ 采购指南或政策手册 | Speeds compliant competitive procurement.<br>加速合规的竞争性采购。 |
| "Summarize quarterly vendor-performance metrics and draft a letter requesting a service-credit discussion."<br>"总结季度供应商绩效指标,并起草一封要求讨论服务抵扣的信函。" | ✅ Vendor performance reports<br>✅ 供应商绩效报告 | Supports accountable supplier management.<br>支持负责任的供应商管理。 |

### **7. Incident & Continuity Response**

### **7. 事件与连续性响应**

| **Prompt** | **Upload?** | **So What?** |
| --- | --- | --- |
| "Draft an initial incident ticket, public statement, and internal chat update for a suspected ransomware event affecting [agency] mail servers."<br>"为影响 [机构] 邮件服务器的疑似勒索软件事件起草初始事件工单、公开声明和内部聊天更新。" | ✅ Incident notes<br>✅ 事件记录 | Ensures consistent, timely communication.<br>确保一致、及时的沟通。 |
| "Generate a post-incident report outline for last week's network outage, including root cause, mitigation, and lessons-learned sections."<br>"为上周的网络中断生成事后报告大纲,包括根本原因、缓解措施和经验教训部分。" | ✅ Syslog extracts<br>✅ 系统日志摘录 | Accelerates after-action reviews.<br>加速事后审查。 |
| "Create a continuity-of-operations checklist for migrating critical apps to an alternate data center within 24 hours."<br>"创建业务连续性运营检查清单,用于在 24 小时内将关键应用程序迁移到备用数据中心。" | N/A | Provides a ready-made playbook for drills.<br>为演练提供现成的操作手册。 |

### **8. Interagency Collaboration & Knowledge Sharing**

### **8. 跨机构协作与知识共享**

| **Prompt** | **Upload?** | **So What?** |
| --- | --- | --- |
| "Map overlapping cybersecurity training requirements in these policies from the tax, commerce, and agriculture agencies our employees have to follow. Propose one consolidated curriculum with shared modules and agency-specific electives."<br>"映射我们员工必须遵循的税务、商务和农业机构政策中重叠的网络安全培训要求。提出一个包含共享模块和机构特定选修课程的统一课程。" | ✅ Three training-policy documents and current employee requirements.<br>✅ 三份培训政策文档和当前员工要求。 | Promotes resource pooling and consistent skills development.<br>促进资源共享和一致的技能发展。 |
| "Summarize technical standards cited in these procurement frameworks (national, regional, municipal) and present a comparison table showing where they align or differ on encryption, logging, and data-retention requirements."<br>"总结这些采购框架(国家、地区、市政)中引用的技术标准,并呈现对比表,显示它们在加密、日志记录和数据保留要求方面的一致性或差异。" | ✅ Framework documents<br>✅ 框架文档 | Clarifies compatibility before joint projects.<br>在联合项目前明确兼容性。 |
| "Create a single-slide architecture overview explaining how our open-API gateway enables data exchange among partnering agencies."<br>"创建单页架构概览,解释我们的开放 API 网关如何实现合作机构之间的数据交换。" | ✅ Diagram or specification<br>✅ 图表或规范 | Helps non-technical stakeholders grasp integration value.<br>帮助非技术利益相关者理解集成价值。 |

### **Safeguards & Review**

### **保障措施与审查**

Outputs are **drafts—never final policy or code**. Apply your expert judgement, and normal review processes before implementation.

输出是**草稿——绝非最终政策或代码**。在实施前应用您的专家判断和正常审查流程。

### **Take Your First Step Today**

### **今天就迈出第一步**

Pick a prompt that matches today's backlog item, paste it into ChatGPT. Watch generative AI clear repetitive tasks—freeing your team to focus on your most critical mission impacting work.

选择与今天待办事项匹配的提示词,将其粘贴到 ChatGPT 中。观看生成式 AI 清除重复性任务——释放您的团队专注于最关键的任务影响工作。
Title: Unlocking%20ChatGPT%20for%20Government:%20A%20Prompt-Pack%20IT%20Staff

URL Source: https://academy.openai.com/public/resources/govt-prompt-pack-it-staff

Published Time: 2025-07-19T01:10:42.876Z

Markdown Content:
### **Why It Matters**

Whether you safeguard a national payment gateway, secure a regional elections network, or operate a municipal open-data portal, you likely juggle legacy systems, cyber threats, tech debt, and competing budget and programmatic or mission needs and political imperatives. Generative artificial intelligence (AI) will not replace your engineering, leadership, or organizational expertise, but it can accelerate code reviews, log analysis, configuration drafting, vendor oversight—and other tasks that fill your queue.

### **How to Use This Pack**

1.   **Replace brackets […]** with your own system names, jurisdictions, or data sources. 

1.   **Attach artifacts**—security scans, log files, architectural diagrams—ChatGPT should reference. 

1.   **Specify an output style** (for example, “table,” “diagram,” or “plain-language summary”). 

1.   **Review every draft** for security, privacy, and policy compliance before sharing. 

### **Simple steps for writing a good prompt**

**1. Outline the task**Be clear about what you need ChatGPT to do.

→ _Example_: _Summarize last quarter’s program participation data and suggest policy or operational adjustments for the next quarter._

**2. Give helpful context**Add any background (or documentation) that will help.

→ _Example_: _Use data from our Q2 outreach and enrollment report submitted to the Department of Health Services._

_**3. Describe your ideal output**_ _Tell ChatGPT how you’d like the response._

_→ Example: Write it as a formal executive summary._

### **1. System Security & Vulnerability Management**

**Prompt****Upload?****So What?**
“Analyze these weekly vulnerability-scan results for the [system name] and group findings by severity and affected component. Recommend remediation steps ranked by risk reduction.”✅ Scan report Prioritizes fixes for critical services within minutes.
“Draft a one-page summary of all application-security exceptions granted last quarter and map each to the relevant control in our [cybersecurity baseline].”✅ Exception tracker Speeds reporting to auditors and oversight boards.
“Extract the ten most frequent attack vectors from these intrusion-detection logs and visualise them in a bar chart for the monthly security briefing.”✅ Log files Turns raw logs into decision-ready visuals.

### **2. DevOps & Release Management**

**Prompt****Upload?****So What?**
“Merge these code-coverage reports from the last three builds, calculate test-coverage percentage for each module, highlight any module below 75 percent, and produce a bar chart of the results with a short narrative explaining the biggest gaps.”✅Coverage report files Reduces repetitive low level work on developers.
“Summarize performance-test data and highlight endpoints exceeding the [value] millisecond Service Level Agreement (SLA). Present findings as a table.”✅ Performance test logs Pinpoints bottlenecks ahead of release.
“Create a change-management request template for rolling back version [ # ] of the [application]. Include impact analysis, rollback steps, and stakeholder notifications.”✅ Release notes or deployment plan Produces structured documentation required for Information Technology Infrastructure Library (ITIL) approval.

### **3. Infrastructure & Cloud Operations**

**Prompt****Upload?****So What?**
“Here are our existing IaC definitions for the standby database cluster (in YAML/JSON). Compare each resource against our [policy name] requirements—data-at-rest encryption, network isolation, tag standards—and produce a table of any non-compliant items with suggested fixes.”✅ IaC files (YAML/JSON)You get a compliance review in minutes, with concrete remediation steps.
“Review these server configuration manifests and suggest security baselines aligned with widely accepted benchmarks (e.g., CIS, NIST). Present recommendations in a table with columns for config area, current setting, recommended baseline, and rationale.”✅ Configuration files (YAML/JSON)Strengthens posture without brand-specific tooling.
“Generate a weekly capacity report for virtual machines hosting the [**system name**], including CPU, memory, and storage trends. Include 30-day forecasts using historical usage. Present results as: (1) summary table of resource utilization, (2) line charts by metric, and (3) a short narrative identifying any projected constraints.”✅ Monitoring exports Informs budget and scaling decisions.

### **4. Data Quality, Analysis & Visualization**

**Prompt****Upload?****So What?**
“Deduplicate this dataset of [dataset name / type] by identity number and date, flagging conflicting entries for review. Provide a summary of duplicates removed.”✅ Dataset (CSV or spreadsheet)Cleans data in seconds, improving downstream analytics.
"Create a dashboard-ready summary showing the distribution of response times in these help-desk logs, and highlight outliers beyond two standard deviations.”✅ Log export Turns raw numbers into actionable visuals.
“Combine these three tab-delimited exports into one normalized table, add a ‘last_updated’ timestamp, and output the result in JavaScript Object Notation (JSON).”✅ Multiple tab-delimited files Accelerates extract-transform-load (ETL) chores.

### **5. Service Desk & End-User Support**

**Prompt****Upload?****So What?**
“Generate a knowledge-base article on enrolling devices in our mobile-device-management solution, with step-by-step screenshots and plain-language instructions.”✅ MDM console captures Reduces ticket volume.
“Analyze last quarter’s ticket logs and surface the top five recurring issues by department. Suggest self-service resources for each.”✅ Ticket export Directs training and self-help investments.
“Draft a decision-tree for categorizing new support tickets based on keywords and priority. Present it as indented plain text.”✅ Ticket export Improves triage consistency without additional staff.

### **6. Procurement & Vendor Oversight**

**Prompt****Upload?****So What?**
“Compare the Service Level Agreements (SLAs) in these three cloud-hosting proposals and highlight gaps against our uptime requirement.”✅ Proposals Simplifies evaluation tables for the review committee.
“Generate a draft Request for Proposal (RFP) template for a Security Information and Event Management (SIEM) platform, referencing our jurisdiction’s procurement rules and minimum cybersecurity controls.”✅ Procurement guidelines or policy manual Speeds compliant competitive procurement.
“Summarize quarterly vendor-performance metrics and draft a letter requesting a service-credit discussion.”✅ Vendor performance reports Supports accountable supplier management.

### **7. Incident & Continuity Response**

**Prompt****Upload?****So What?**
“Draft an initial incident ticket, public statement, and internal chat update for a suspected ransomware event affecting [agency] mail servers.”✅ Incident notes Ensures consistent, timely communication.
“Generate a post-incident report outline for last week’s network outage, including root cause, mitigation, and lessons-learned sections.”✅ Syslog extracts Accelerates after-action reviews.
“Create a continuity-of-operations checklist for migrating critical apps to an alternate data center within 24 hours.”N/A Provides a ready-made playbook for drills.

### **8. Interagency Collaboration & Knowledge Sharing**

**Prompt****Upload?****So What?**
“Map overlapping cybersecurity training requirements in these policies from the tax, commerce, and agriculture agencies our employees have to follow. Propose one consolidated curriculum with shared modules and agency-specific electives.”✅ Three training-policy documents and current employee requirements.Promotes resource pooling and consistent skills development.
“Summarize technical standards cited in these procurement frameworks (national, regional, municipal) and present a comparison table showing where they align or differ on encryption, logging, and data-retention requirements.”✅ Framework documents Clarifies compatibility before joint projects.
“Create a single-slide architecture overview explaining how our open-API gateway enables data exchange among partnering agencies.”✅ Diagram or specification Helps non-technical stakeholders grasp integration value.

### **Safeguards & Review**

Outputs are **drafts—never final policy or code**. Apply your expert judgement, and normal review processes before implementation.

### **Take Your First Step Today**

Pick a prompt that matches today’s backlog item, paste it into ChatGPT. Watch generative AI clear repetitive tasks—freeing your team to focus on your most critical mission impacting work.


import { Pie, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement
} from "chart.js";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement
);

function App() {
  const costData = {
    labels: ["Raw Materials", "Power & Fuel", "Labour", "Logistics & Others"],
    datasets: [
      {
        data: [52, 28, 12, 8],
        backgroundColor: ["#0f4c81", "#3b82f6", "#93c5fd", "#bfdbfe"]
      }
    ]
  };

  const revenueData = {
    labels: ["Q1", "Q2", "Q3", "Q4"],
    datasets: [
      {
        label: "Revenue (₹ Crores)",
        data: [12500, 13800, 14600, 14100],
        backgroundColor: "#2563eb"
      }
    ]
  };

  const styles = {
    page: {
      fontFamily: "'Segoe UI', Arial, sans-serif",
      backgroundColor: "#f1f5f9",
      color: "#0f172a",
      scrollBehavior: "smooth"
    },
    nav: {
      background: "linear-gradient(90deg, #0f4c81, #2563eb)",
      color: "white",
      padding: "20px 40px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      boxShadow: "0 6px 20px rgba(0,0,0,0.25)"
    },
    navLink: {
      color: "white",
      textDecoration: "none",
      fontWeight: 500,
      cursor: "pointer"
    },
    section: {
      backgroundColor: "white",
      padding: "45px",
      margin: "40px auto",
      width: "85%",
      borderRadius: "14px",
      boxShadow: "0 10px 30px rgba(0,0,0,0.08)"
    },
    sectionAlt: {
      backgroundColor: "#e0f2fe",
      padding: "45px",
      margin: "40px auto",
      width: "85%",
      borderRadius: "14px"
    },
    heading: {
      color: "#0f4c81"
    },
    kpiGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
      gap: "25px",
      marginTop: "25px"
    },
    kpiCard: {
      background: "linear-gradient(135deg, #dbeafe, #eff6ff)",
      padding: "30px",
      borderRadius: "14px",
      textAlign: "center",
      boxShadow: "0 6px 16px rgba(0,0,0,0.12)"
    },
    table: {
      width: "100%",
      borderCollapse: "collapse",
      marginTop: "25px"
    },
    th: {
      backgroundColor: "#0f4c81",
      color: "white",
      padding: "14px",
      border: "1px solid #cbd5e1"
    },
    td: {
      padding: "14px",
      border: "1px solid #cbd5e1",
      textAlign: "center",
      backgroundColor: "#f8fafc"
    },
    footer: {
      background: "linear-gradient(90deg, #0f4c81, #2563eb)",
      color: "white",
      padding: "30px 40px",
      marginTop: "60px"
    },
    footerLink: {
      color: "white",
      textDecoration: "none"
    }
  };

  return (
    <div style={styles.page}>
      {/* NAVBAR */}
      <nav style={styles.nav}>
        <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
          <img
            src={process.env.PUBLIC_URL + "/hindalco-logo.png"}
            alt="Hindalco Logo"
            style={{ height: "55px" }}
          />

          <div>
            <h2 style={{ margin: 0 }}>Hindalco Industries Ltd</h2>
            <p style={{ margin: 0, fontSize: "13px", opacity: 0.9 }}>
              Finance & Performance Dashboard
            </p>
          </div>
        </div>

        <div style={{ display: "flex", gap: "25px", fontSize: "14px" }}>
          <a href="#overview" style={styles.navLink}>Overview</a>
          <a href="#kpis" style={styles.navLink}>KPIs</a>
          <a href="#revenue" style={styles.navLink}>Revenue</a>
          <a href="#costs" style={styles.navLink}>Costs</a>
          <a href="#esg" style={styles.navLink}>ESG</a>
        </div>
      </nav>

      {/* OVERVIEW */}
      <div id="overview" style={styles.section}>
        <h1 style={styles.heading}>Executive Financial Summary</h1>
        <p>
          This dashboard provides a comprehensive financial overview, cost
          analysis, risk assessment, and sustainability perspective for an
          aluminium manufacturing enterprise such as Hindalco Industries Ltd.
        </p>
      </div>

      {/* KPIs */}
      <div id="kpis" style={styles.sectionAlt}>
        <h2 style={styles.heading}>Key Financial Indicators</h2>
        <div style={styles.kpiGrid}>
          <div style={styles.kpiCard}><h3>₹55,000 Cr</h3><p>Total Revenue</p></div>
          <div style={styles.kpiCard}><h3>₹38,000 Cr</h3><p>Operating Cost</p></div>
          <div style={styles.kpiCard}><h3>31%</h3><p>EBITDA Margin</p></div>
          <div style={styles.kpiCard}><h3>₹9,500 Cr</h3><p>Net Profit</p></div>
        </div>
      </div>

      {/* REVENUE */}
      <div id="revenue" style={styles.section}>
        <h2 style={styles.heading}>Quarter-wise Revenue Performance</h2>
        <div style={{ maxWidth: "700px", margin: "30px auto" }}>
          <Bar data={revenueData} />
        </div>
      </div>

      {/* COSTS */}
      <div id="costs" style={styles.sectionAlt}>
        <h2 style={{ ...styles.heading, textAlign: "center" }}>
          Cost Structure Breakdown (%)
        </h2>
        <div style={{ maxWidth: "460px", margin: "30px auto" }}>
          <Pie data={costData} />
        </div>
      </div>

      {/* RISK */}
      <div style={styles.section}>
        <h2 style={styles.heading}>Risk Analysis</h2>
        <ul>
          <li>Raw material price volatility</li>
          <li>Energy and fuel cost fluctuations</li>
          <li>Regulatory and environmental compliance risks</li>
          <li>Global demand and forex exposure</li>
        </ul>
      </div>

      {/* RECOMMENDATIONS */}
      <div style={styles.sectionAlt}>
        <h2 style={styles.heading}>Recommendations & Action Plan</h2>
        <ul>
          <li>Long-term supplier contracts for raw materials</li>
          <li>Investments in renewable and captive power</li>
          <li>Digital automation of production processes</li>
          <li>Improved logistics and supply chain planning</li>
        </ul>
      </div>

      {/* ESG */}
      <div id="esg" style={styles.section}>
        <h2 style={styles.heading}>Sustainability & ESG Finance Perspective</h2>
        <ul>
          <li>Reduced carbon footprint through renewable energy</li>
          <li>Water recycling and waste heat recovery</li>
          <li>Employee safety and community development</li>
          <li>Green bonds and ESG-linked financing</li>
        </ul>
      </div>

      {/* FOOTER */}
      <footer style={styles.footer}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "25px" }}>
          <div>
            <h3>About This Project</h3>
            <p style={{ fontSize: "14px" }}>
              Finance analytics dashboard developed as part of an internship
              project for an aluminium manufacturing enterprise.
            </p>
          </div>
          <div>
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#overview" style={styles.footerLink}>Overview</a></li>
              <li><a href="#kpis" style={styles.footerLink}>KPIs</a></li>
              <li><a href="#revenue" style={styles.footerLink}>Revenue</a></li>
              <li><a href="#costs" style={styles.footerLink}>Costs</a></li>
              <li><a href="#esg" style={styles.footerLink}>ESG</a></li>
            </ul>
          </div>
          <div>
            <h3>Disclaimer</h3>
            <p style={{ fontSize: "13px" }}>
              All financial figures are illustrative and for academic purposes only.
            </p>
          </div>
        </div>

        <hr style={{ margin: "25px 0", opacity: 0.3 }} />
        <p style={{ textAlign: "center", fontSize: "13px" }}>
          Finance Internship Project | Hindalco Industries Ltd © 2025
        </p>
      </footer>
    </div>
  );
}

export default App;

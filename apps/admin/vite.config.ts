import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'admin',
      filename: 'remoteEntry.js',
      exposes: {
        './FundingList': './src/pages/fundingHistory/fundingList.tsx',
        './FundingHistory': './src/pages/fundingHistory/fundingHistory.tsx',
        './CompletedFunding': './src/pages/fundingHistory/completedFundingcard.tsx',
        './MakerProfile': './src/pages/makerProfile/makerProfile.tsx',
        './PaymentList': './src/pages/paymentManagement/paymentList.tsx',
        './PaymentManagement': './src/pages/paymentManagement/paymentManagement.tsx',
        './PaymentSummary': './src/pages/paymentManagement/paymentSummary.tsx',
        './StatsPage': './src/pages/stats/StatsPage.tsx',
        './StatsHeader': './src/pages/stats/statsHeader.tsx',
        './StatsContent': './src/pages/stats/statsContent.tsx',
        './StatsLineChart': './src/pages/stats/StatsLineChart.tsx',
        './StatsSummary': './src/pages/stats/statsSummary.tsx',
        './SupporterPieChart': './src/pages/stats/SupporterPieChart.tsx',
      },
      shared: ['react', 'react-dom'],
    }),
  ],
  build: {
    target: 'esnext',
  },
});

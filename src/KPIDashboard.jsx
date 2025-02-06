import React from 'react';
import { TrendingUp, TrendingDown, Activity, Users, ShoppingCart, DollarSign, Clock, Eye, Share2, Target, Zap, Award, Box, Globe } from 'lucide-react';

const KPICard = ({ title, value, change, changeType, icon: Icon, metric }) => {
  const isPositive = changeType === 'increase';
  const changeColor = isPositive ? 'text-green-500' : 'text-red-500';
  const bgColor = isPositive ? 'bg-green-50' : 'bg-red-50';

  return (
    <div className="bg-white rounded-lg p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
      <div className="flex items-center justify-between mb-4">
        <div className="p-2 bg-blue-50 rounded-lg">
          <Icon className="h-6 w-6 text-blue-500" />
        </div>
        <div className={`flex items-center ${bgColor} px-2 py-1 rounded-full`}>
          {isPositive ? (
            <TrendingUp className={`h-4 w-4 ${changeColor} mr-1`} />
          ) : (
            <TrendingDown className={`h-4 w-4 ${changeColor} mr-1`} />
          )}
          <span className={`text-sm font-medium ${changeColor}`}>{change}%</span>
        </div>
      </div>
      <h3 className="text-lg font-medium text-gray-700 mb-2">{title}</h3>
      <div className="flex items-baseline">
        <span className="text-2xl font-bold text-gray-900">{value}</span>
        <span className="text-sm text-gray-500 ml-2">{metric}</span>
      </div>
    </div>
  );
};

const KPIDashboard = () => {
  const kpiData = [
    // Row 1
    [
      { title: "Total Revenue", value: "$124,563", change: "12.5", changeType: "increase", icon: DollarSign, metric: "This Month" },
      { title: "Active Users", value: "8,549", change: "8.2", changeType: "increase", icon: Users, metric: "Daily" },
      { title: "Conversion Rate", value: "3.2", change: "1.8", changeType: "decrease", icon: Target, metric: "%" },
    ],
    // Row 2
    [
      { title: "Average Order Value", value: "$85.32", change: "5.4", changeType: "increase", icon: ShoppingCart, metric: "Per Order" },
      { title: "Session Duration", value: "4:23", change: "2.1", changeType: "increase", icon: Clock, metric: "Minutes" },
      { title: "Page Views", value: "245K", change: "3.5", changeType: "decrease", icon: Eye, metric: "This Week" },
    ],
    // Row 3
    [
      { title: "Social Shares", value: "1,824", change: "15.7", changeType: "increase", icon: Share2, metric: "This Month" },
      { title: "Platform Usage", value: "92.6", change: "4.2", changeType: "increase", icon: Activity, metric: "%" },
      { title: "Load Time", value: "0.82", change: "12.3", changeType: "decrease", icon: Zap, metric: "Seconds" },
    ],
    // Row 4
    [
      { title: "Transaction Volume", value: "12,847", change: "9.3", changeType: "increase", icon: DollarSign, metric: "This Month" },
      { title: "Customer Loyalty", value: "78.5", change: "6.8", changeType: "increase", icon: Award, metric: "Score" },
      { title: "Inventory Turnover", value: "5.2", change: "2.4", changeType: "decrease", icon: Box, metric: "Ratio" },
    ],
    // Row 5
    [
      { title: "Global Reach", value: "124", change: "18.9", changeType: "increase", icon: Globe, metric: "Countries" },
      { title: "Market Share", value: "34.8", change: "7.2", changeType: "increase", icon: Target, metric: "%" },
      { title: "Customer Growth", value: "22.4", change: "5.6", changeType: "increase", icon: Users, metric: "% Monthly" },
    ],
  ];

  return (
    <div className="p-6 space-y-6 bg-gray-50">
      {kpiData.map((row, rowIndex) => (
        <div key={rowIndex} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {row.map((kpi, kpiIndex) => (
            <KPICard key={kpiIndex} {...kpi} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default KPIDashboard;
import User from "../models/User.js";
import Transaction from "../models/Transaction.js";
import OverallStats from "../models/OverallStat.js";

export const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getDashboardStats = async (req, res) => {
  try {
    const curentYear = 2021;
    const currentMonth = "November";
    const currentDay = "2021-11-15";

    // Recent transaction
    const transactions = await Transaction.find()
      .limit(50)
      .sort({ createdOn: -1 });

    // Overall stats?
    const overallStats = await OverallStats.find({ year: curentYear });

    const {
      totalCustomers,
      yearlySalesTotal,
      yearlyTotalSoldUnits,
      monthlyData,
      salesByCategory,
    } = overallStats[0];

    const thisMonthStats = overallStats[0].find(
      ({ month }) => month === currentMonth
    );

    const todayStats = overallStats[0].find(({ date }) => date === currentDay);

    res.status(200).json({
      totalCustomers,
      yearlySalesTotal,
      yearlyTotalSoldUnits,
      monthlyData,
      salesByCategory,
      thisMonthStats,
      todayStats,
      transactions,
    });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

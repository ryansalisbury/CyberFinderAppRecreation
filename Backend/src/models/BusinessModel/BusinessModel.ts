import mongoose from "mongoose";

const BusinessUserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

export const BusinessUser = mongoose.model("BusinessUser", BusinessUserSchema);

const BusinessQuestionnaireSchema = new mongoose.Schema({
  businessUser: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "BusinessUser",
    required: true,
  },
  businessName: String,
  phoneNumber: String,
  region: String,
  website: String,
  postcode: String,
  lastROCUInteraction: Date,
  numberOfEmployees: Number,
  smeBusiness: Boolean,
  timeSubmitted: Date,
  numberOfSOCEmployees: Number,
  companyName: String,
  pocInternalSOC: String,
  internalSOCSatisfaction: Number,
  pocExternalSOC: String,
  externalSOCSatisfaction: Number,
  afDateReport: Date,
  afCaseId: String,
  supportReceived: String,
  cyberCrimeType: String,
  privateCompanyName: String,
  reasoningForPrivateCompany: String,
  reasoningForNoPrivateCompany: String,
  estimatedLoss: Number,
  inDepthDescription: String,
  cyberTopicsToImprove: [String],
  latitude: Number,
  longitude: Number,
  rgbHex: String,
  vulnerabilityScore: Number,
});

export const BusinessQuestionnaire = mongoose.model(
  "BusinessQuestionnaire",
  BusinessQuestionnaireSchema
);

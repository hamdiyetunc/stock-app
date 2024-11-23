import 'mongoose';

declare module 'mongoose' {
  interface ConnectOptions {
    useNewUrlParser?: boolean;
    useUnifiedTopology?: boolean;
    useCreateIndex?: boolean;
  }
}
